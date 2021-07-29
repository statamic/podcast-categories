# Podcast Categories

## Features
- **Fieldtype** pre-populated with all the currently supported Apple Podcast (iTunes) categories
- Automatically formats the proper `<itunes:category>` XML elements with [Augmentation](https://statamic.dev/augmentation)

## Installation

Require it using Composer.

```
composer require statamic/podcast-categories
```

And then choose **Podcast Categories** from the list of available Fieldtypes when working with blueprints.

## Usage

The Antlers output of any **Podcast Categories** field will be a properly formatted XML element. Example:

```
{{ primary_category }}

// Might render a top level, self closing category
<itunes:category text="Comedy"/>

// Or a subcategory.
<itunes:category text="Health & Fitness">
    <itunes:category text="Nutrition"/>
</itunes:category>
```
