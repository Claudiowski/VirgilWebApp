<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
            class="elevation-1"
        >
        </v-data-table>
        <v-btn
            absolute
            dark
            fab
            bottom
            right
            color="cyan"
            >
            <v-icon>add</v-icon>
        </v-btn>
    </div>
</template>

<script>

export default {
  name: 'ManageCategory',
  data() {
    return {
        headers: [
            {
                text: 'Label',
                align: 'left',
                sortable: false,
                name: 'label'
            },
            {
                text: 'Theme',
                name: 'theme'
            }
        ],
        items: [ ]
    }
  }
}

</script>

<style>

</style>
