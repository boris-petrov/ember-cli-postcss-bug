import Application from 'ember-cli-postcss-bug/app';
import config from 'ember-cli-postcss-bug/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
