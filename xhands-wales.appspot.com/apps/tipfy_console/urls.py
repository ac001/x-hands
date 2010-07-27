# -*- coding: utf-8 -*-

from tipfy import Rule

def get_rules(app):

    rules = [
        Rule('/_ah/tipfy', endpoint='tipfy', handler='apps.tipfy_console.handlers.TipfyHandler'),
    ]
    return rules
