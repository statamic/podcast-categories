<script setup>
import { Fieldtype } from '@statamic/cms';
import { Select } from '@statamic/cms/ui';

const emit = defineEmits(Fieldtype.emits);
const props = defineProps(Fieldtype.props);
const { update } = Fieldtype.use(emit, props);
</script>

<template>
	<Select
		:options="meta.categories"
		:model-value="value"
		@update:model-value="update"
	/>
</template>