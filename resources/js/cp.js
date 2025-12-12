import PodcastCategoriesFieldtype from './components/fieldtypes/PodcastCategories.vue'

Statamic.booting(() => {
    Statamic.component('podcast_categories-fieldtype', PodcastCategoriesFieldtype);
});
