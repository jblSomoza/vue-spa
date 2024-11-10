import { onMounted, defineComponent, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount, onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated, ref } from "vue";

export default defineComponent({
    setup() {
        const counter = ref(0);

        console.log('HomePage');

        onMounted(() => {
            console.log('HomePage mounted');
        })
        onUpdated(() => {
            console.log('HomePage updated');
        })
        onUnmounted(() => {
            console.log('HomePage unmounted');
        })
        onBeforeMount(() => {
            console.log('HomePage before');
        })
        onBeforeUpdate(() => {
            console.log('HomePage before update');
        })
        onBeforeUnmount(() => {
            console.log('HomePage before unmount');
        })
        onErrorCaptured(() => {
            console.log('HomePage error');
        })
        onRenderTracked(() => {
            console.log('HomePage render tracked');
        })
        onRenderTriggered(() => {
            console.log('HomePage render triggered');
        })
        onActivated(() => {
            console.log('HomePage activated');
        })
        onDeactivated(() => {
            console.log('HomePage deactivated');
        })

        return {
            counter
        }

    },
});