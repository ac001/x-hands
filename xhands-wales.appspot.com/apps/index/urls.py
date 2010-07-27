# -*- coding: utf-8 -*-

from tipfy import Rule

def get_rules(app):

    rules = [
        Rule('/', endpoint='index', handler='apps.index.handlers.IndexHandler'),
    ]
    return rules
