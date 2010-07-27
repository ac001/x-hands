# -*- coding: utf-8 -*-

from tipfy import Rule

def get_rules(app):

    rules = [
        Rule('/auth', endpoint='auth', handler='apps.auth.handlers.AuthHandler'),
    ]
    return rules
