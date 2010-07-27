# -*- coding: utf-8 -*-

from tipfy import Rule

def get_rules(app):

    rules = [
        Rule('/directory', endpoint='directory', handler='apps.directory.handlers.DirectoryHandler'),
    ]
    return rules
