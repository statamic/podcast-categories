<?php

namespace Statamic\PodcastCategories\Fieldtypes;

use Statamic\Fields\Fieldtype;

class PodcastCategories extends Fieldtype
{
    protected $icon = 'tags';

    public function augment($value)
    {
        $split = explode(' » ', $value);

        if (count($split) > 1) {
            $xml = '<itunes:category text="'.$split[0].'">';
            $xml .= '<itunes:category text="'.$split[1].'"/>';
            $xml .= '</itunes:category>';
        } else {
            $xml = '<itunes:category text="'.$split[0].'"/>';
        }

        return $xml;
    }
}
