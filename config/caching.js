/**
 * Custom configuration
 * (sails.config.caching)
 *
 */

module.exports.caching = {
  globalPrefix: 'chakra-api-cache',
  separator: ':',
  ttl: 5 * 60 * 1000,

  ACCESSTOKEN: {
    key: 'access-token',
    enabled: true,
  },

  TEAM: {
    key: 'team',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  CHAKRASCRIPT: {
    key: 'chakra-script',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  USER: {
    key: 'user',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentSingleCaches: [ 'USER_BY_ID' ],
    dependentCaches: [ 'SKILL_LIST' ],
  },

  USERHIERARCHYMAPPING: {
    key: 'user-hierarchy-mapping',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'USER' ],
  },

  USERSKILLMAPPING: {
    key: 'user-skill-mapping',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'SKILL_LIST' ],
  },

  VMSCRIPT: {
    key: 'vm-script',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  EXTERNALAPI: {
    key: 'external-api',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  EXTERNALAPI_REQUEST: {
    key: 'external-api-request',
    enabled: true,
    ttl: 5 * 60 * 1000,
  },

  ATTRIBUTE: {
    key: 'attribute',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'ATTRIBUTE_LIST', 'ATTRIBUTE_LIST_USING_WHERE', 'ENTITY_LIST', 'PROCEDURE_LIST', 'STATETASK_LIST', 'USERPROFILE_LIST' ],
  },

  DERIVEDATTRIBUTE: {
    key: 'derived-attribute',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'DERIVEDATTRIBUTE_LIST', 'PROCEDURE_LIST' ],
  },

  ATTRIBUTECONFIG: {
    key: 'attributeconfig',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'ATTRIBUTE_LIST', 'ATTRIBUTE_LIST_USING_WHERE', 'ATTRIBUTECONFIG_LIST' ],
  },

  ATTRIBUTEOPTION: {
    key: 'attribute-option',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'ATTRIBUTE_LIST', 'ATTRIBUTE_LIST_USING_WHERE' ],
  },

  FORMPAGE: {
    key: 'form-page',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'FORM_LIST' ],
  },

  FORMFIELD: {
    key: 'form-page',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'FORMFIELD_LIST', 'FORM_LIST' ],
  },

  FORMACTIONBUTTON: {
    key: 'form-action-button',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'FORMACTIONBUTTON_LIST', 'FORM_LIST' ],
  },

  LIFECYCLERULE: {
    key: 'lifecycle-rule',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'LIFECYCLERULE_LIST', 'LIFECYCLERULE_LIST_USING_WHERE' ],
  },

  ROLE: {
    key: 'role',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'ROLE_LIST', 'PROCEDURE_LIST', 'SCREEN_LIST' ],
  },

  STATE: {
    key: 'state',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'PROCEDURE_LIST' ],
  },

  STATEGRAPH: {
    key: 'stategraph',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'PROCEDURE_LIST' ],
  },

  ENTITY: {
    key: 'entity',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'ENTITY_LIST' ],
  },

  PROCEDURE: {
    key: 'procedure',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'PROCEDURE_LIST' ],
  },

  STATETASK: {
    key: 'statetask',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'STATETASK_LIST' ],
  },

  WIDGET: {
    key: 'widget',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'WIDGET_LIST', 'SCREEN_LIST' ],
  },

  SKILL: {
    key: 'skill',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'SKILL_LIST', 'SKILLTYPE_LIST' ],
  },

  SKILLTYPE: {
    key: 'skilltype',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'SKILLTYPE_LIST' ],
  },

  WIDGETSHAREDCONFIG: {
    key: 'widgetsharedconfig',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'WIDGETSHAREDCONFIG_LIST' ],
  },

  BOOKINGTYPE: {
    key: 'bookingtype',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'BOOKINGTYPE_LIST' ],
  },

  PLUGIN: {
    key: 'plugin',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'PLUGIN_LIST', 'PLUGIN_LIST_TEAM_PLUGINS' ],
  },

  SCRIPTPARAMETER: {
    key: 'script-parameter',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'CHAKRASCRIPT' ],
  },

  UPLOADERFIELD: {
    key: 'uploader-field',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
    dependentCaches: [ 'UPLOADER_LIST' ],
  },

  USER_BY_ID: {
    key: 'user-by-id',
    isGlobalCache: true,
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  ATTRIBUTE_LIST: {
    key: 'attribute-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  ATTRIBUTE_LIST_USING_WHERE: {
    key: 'attribute-list-using-where',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  LIFECYCLERULE_LIST: {
    key: 'lifecycle-rule-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  LIFECYCLERULE_LIST_USING_WHERE: {
    key: 'lifecycle-rule-list-using-where',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  ATTRIBUTETYPE_LIST: {
    key: 'attribute-type-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  TASKTYPE_LIST: {
    key: 'task-type-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  WIDGETTYPE_LIST: {
    key: 'widget-type-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  DERIVEDATTRIBUTE_LIST: {
    key: 'derived-attribute-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  ATTRIBUTEGROUP_LIST: {
    key: 'attribute-group-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  ROLE_LIST: {
    key: 'role-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  POD_LIST: {
    key: 'pod-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  ENTITY_LIST: {
    key: 'entity-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  PROCEDURE_LIST: {
    key: 'procedure-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  FORM_LIST: {
    key: 'form-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  FORMFIELD_LIST: {
    key: 'form-field-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  FORMACTIONBUTTON_LIST: {
    key: 'form-action-button-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  UPLOADER_LIST: {
    key: 'uploader-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  STATETASK_LIST: {
    key: 'statetask-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  USERPROFILE_LIST: {
    key: 'userprofile-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  SCREEN_LIST: {
    key: 'screen-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  WIDGET_LIST: {
    key: 'widget-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  WIDGETSHAREDCONFIG_LIST: {
    key: 'widgetsharedconfig-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  BOOKINGTYPE_LIST: {
    key: 'bookingtype-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  SKILL_LIST: {
    key: 'skill-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  SKILLTYPE_LIST: {
    key: 'skilltype-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  ATTRIBUTECONFIG_LIST: {
    key: 'attributeconfig-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  PLUGIN_LIST: {
    key: 'plugin-list',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },

  PLUGIN_LIST_TEAM_PLUGINS: {
    key: 'plugin-list-team-plugins',
    enabled: true,
    ttl: 24 * 60 * 60 * 1000,
  },
};

