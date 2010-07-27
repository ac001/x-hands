# -*- coding: utf-8 -*-

## Shows a google map

from tipfy import Rule

def get_rules(app):

    rules = [
        Rule('/map', endpoint='map', handler='apps.map.handlers.MapHandler'),
    ]

    return rules
