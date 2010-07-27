# -*- coding: utf-8 -*-

from tipfy import Rule

def get_rules(app):

    rules = [
        Rule('/classifieds', endpoint='classifieds', handler='apps.classifieds.handlers.ClassifiedsHandler'),
    ]
    return rules
