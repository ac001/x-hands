# -*- coding: utf-8 -*-

from tipfy import Rule

def get_rules(app):

    rules = [
        Rule('/rpxauth', endpoint='rpxauth', handler='apps.rpxauth.handlers.RpxAuthHandler'),
    ]
    return rules
