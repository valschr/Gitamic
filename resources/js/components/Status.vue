<template>
    <div>
        <confirmation-modal
            v-if="confirming"
            title="Commit staged changes"
            buttonText="Commit"
            @confirm="doCommit"
            @cancel="cancelCommit"
        >
            <p>Are you sure you want to commit these changes?</p>
            <ul class="m-2 list-inside">
                <li v-for="file in staged" class="list-disc">{{ file.relative_path }}</li>
            </ul>

            <label for="commit_message">Enter a commit message</label>
            <textarea v-model="commit_message" class="w-full border rounded font-mono p-2 h-48" id="commit_message"></textarea>
        </confirmation-modal>

        <div class="flex mb-3">
            <h1 class="flex-1">{{ __('Gitamic') }}</h1>
            <button class="btn" @click.prevent="getStatus">{{ __('Refresh') }}</button>
            <button
                v-if="hasStagedChanges"
                class="ml-2 btn-primary flex items-center"
                @click="confirmCommit">
                <span>{{ __('Commit') }}</span>
            </button>

            <button
                v-if="! isUpToDate"
                class="ml-2 btn-primary flex items-center"
                @click="push">
                <span>{{ __('Push') }}</span>
            </button>
        </div>

        <div v-if="! loaded" class="card p-3 text-center">
            <loading-graphic  />
        </div>

        <div v-if="loaded">
            <div class="my-4">
                <h2 class="mb-2">Status</h2>
                <pre>{{ status }}</pre>
            </div>

            <div class="my-4">
                <h2 class="mb-2">Staged</h2>
                <gitamic-staged ref="staged" :data="staged"></gitamic-staged>
            </div>

            <div class="my-4">
                <h2 class="mb-2">Unstaged</h2>
                <gitamic-unstaged ref="unstaged" :data="unstaged"></gitamic-unstaged>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        props: [
            'data'
        ],

        data() {
            return {
                loaded: false,
                confirming: false,
                unstaged: [],
                staged: [],
                meta: {},
                commit_message: '',
                up_to_date: true,
                status: '',
            }
        },

        computed: {
            hasStagedChanges() {
                return this.staged.length > 0;
            },

            isUpToDate() {
                return this.up_to_date;
            }
        },

        watch: {
        },

        created() {
            for(const [key, value] of Object.entries(this.data)) {
                this[key] = value;
            }

            if (! this.loaded) {
                this.getStatus();
            }

            this.$events.$on('composer-finished', this.getStatus);
        },

        methods: {
            async getStatus(withLoader) {
                if (withLoader) {
                    this.loaded = false;
                }

                let response = await this.$axios.get(cp_url(`gitamic/api/status`));

                this.loaded = true;
                this.unstaged = response.data.unstaged;
                this.staged = response.data.staged;
                this.meta = response.data.meta;
                this.up_to_date = response.data.up_to_date;
                this.status = response.data.status;
            },

            confirmCommit() {
                this.confirming = true;
            },

            cancelCommit() {
                this.confirming = false;
                this.commit_message = '';
            },

            async doCommit() {
                let response = await this.$axios.post(cp_url(`gitamic/api/commit`), {
                    commit_message: this.commit_message
                });
                await this.getStatus();
                this.confirming = false;
                this.commit_message = '';
            },

            async push() {
                await this.$axios.post(cp_url(`gitamic/api/push`));

                await this.getStatus();
            },
        }
    }
</script>
