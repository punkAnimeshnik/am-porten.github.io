import { createApp } from 'vue';

const app = createApp({});

// Глобальная директива
export default app.directive('scroll', {
    inserted (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
})