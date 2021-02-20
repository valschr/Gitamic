<template>
    <div>
        <data-list ref="list" :visibleColumns="columns" :columns="columns" :rows="rows" sortColumn="path" sortDirection="asc">
            <div class="card p-0 relative" slot-scope="{ filteredRows: rows }">
                <data-list-bulk-actions url="api/actions/unstaged" @started="beginAction" @completed="refresh" />

                <data-list-table :rows="rows" allow-bulk-actions="true">
                    <template slot="cell-relative_path" slot-scope="{ row: file }">
                        <a v-if="file.is_content && ! file.is_deleted"
                           :href="file.edit_url"
                        >
                            {{ file.relative_path }}
                        </a>
                        <span v-else-if="file.is_deleted" class="line-through">
                            {{ file.relative_path }}
                        </span>
                    </template>
                    <template slot="actions" slot-scope="{ row: file, index }">
                        <dropdown-list>
                            <dropdown-item :text="__('Stage')"
                                           key="git.stage"
                                           @click="stage(file)" />
<!--                            <div class="divider"></div>-->
<!--                            <dropdown-item :text="__('Delete')" class="warning" />-->
<!--                            /**@click="destroy(container, index)"**/-->
                        </dropdown-list>
                    </template>
                </data-list-table>
            </div>
        </data-list>
    </div>
</template>

<script>
    export default {

        props: [
            'data',
        ],

        data() {
            return {
                rows: this.data,
                columns: [
                    {
                        'field': 'relative_path',
                        'label': 'Path',
                    },
                    {
                        'field': 'last_modified',
                        'label': 'Last modified',
                        'fieldtype': 'date',
                    }
                ],
            }
        },

        computed: {
        },

        watch: {
            data(newValue, oldValue) {
                this.rows = newValue;
            }
        },

        created() {
        },

        methods: {
            beginAction() {
                this.rows = Object.values(this.rows).filter(row => {
                    return ! Object.values(this.$refs.list.sharedState.selections).includes(row.id);
                });
            },

            async refresh() {
                await this.$root.$refs.status.getStatus();
                this.$refs.list.clearSelections();
            },

            stage(file) {
                let payload = {
                    selections: [file.id],
                    action: 'stage',
                };
                Vue.delete(this.rows, file.id);
                this.$axios.post('api/actions/unstaged', payload, { responseType: 'blob' }).then(response => {
                    this.refresh();
                });
            },
        }
    }
</script>
