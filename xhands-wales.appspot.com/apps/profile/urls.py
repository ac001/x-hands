# -*- coding: utf-8 -*-

from tipfy import Rule

def get_rules(app):

    rules = [
        Rule('/profile', endpoint='profile', handler='apps.profile.handlers.ProfileHandler'),
    ]
    return rules
