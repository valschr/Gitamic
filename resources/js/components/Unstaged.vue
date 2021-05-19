<template>
    <div>
        <data-list ref="list"  :columns="columns" :rows="rows" sortColumn="path" sortDirection="asc">
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
                            <dropdown-item :text="__('Show Diff')"
                                        key="git.openDiff"
                                        @click="openDiff(file, index)" />
                        </dropdown-list>
                    </template>
                </data-list-table>
            </div>
        </data-list>

        <div v-if="diff" class="pt-2">
            <h2 class="mb-2">Git Diff</h2>
            <div v-html="diff"/>
        </div>
        
    </div>
</template>
    

<script>
    import * as Diff2Html from 'diff2html';
    import 'diff2html/bundles/css/diff2html.min.css';

    export default {

        props: [
            'data',
        ],

        data() {

            // for(let idx = 0; idx < this.data.length; idx++) {
            //     this.data[idx]["real_name"] = this.data[idx].relative_path; 

            //     if(this.data[idx].relative_path.includes( 'content/collections/pages')) {                   
            //         let page_name =  this.data[idx].relative_path.split('content/collections/pages/').pop().split('.md')[0]; // returns 'two'
            //         if(page_name) {
            //            page_name =  page_name.charAt(0).toUpperCase() + page_name.slice(1)
            //         }
            //         this.data[idx]["real_name"] = "Page: " + page_name
            //     }              
            // }
            
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
                diff: null,
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

            async openDiff(file, index){
                // Add section under row 
                let payload = { filename: file.relative_path };
                let response = await this.$axios.post('api/diff/', payload)
                if(response && response.data && response.data.result) {
                    let diff = response.data.result
                    let output =  Diff2Html.html(diff, {
                        drawFileList: false,
                        matching: 'lines',
                        outputFormat: 'line-by-line'//'side-by-side'    
                    })
                    this.diff = output;
                }
            }
        }
    }
</script>
