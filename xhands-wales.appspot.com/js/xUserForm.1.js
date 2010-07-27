/*global Ext
*/

//#############################################################################################################
//## User Form
//#############################################################################################################

function xUserForm(userOb){

var self = this;
this.user = userOb;

//*************************************************************************************				
//** User Form
//*************************************************************************************
this.frm = new Ext.FormPanel({
	frame: false,
	renderTo: 'profile_widget_div',
	autoHeight: true,
    url: '/rpc/user/',
	method: 'POST',
    reader: new Ext.data.JsonReader({
				root: 'user',
				fields: [	'name', 'email',
							'location', 
							'date_created', 'ident'
				]
	}),
	plain: true,
	waitMsgTarget: true,
    labelAlign: 'right',
    bodyStyle: 'border: none; padding: 10px',
	labelPad: 10,
    waitMsgTarget: true,
    items: [ {title: 'My Details', xtype: 'fieldset', items: [
				{fieldLabel: 'Full Name', xtype: 'textfield',  emptyText: 'eg Linus Torvalds',
					allowBlank: false, minLength: 3, name: 'name', width: '50%', msgTarget: 'side'},
				{fieldLabel: 'Email', xtype: 'textfield',  emptyText: 'Required for updates', name: 'email', width: '95%', msgTarget: 'side',allowBlank: true},
				{fieldLabel: 'Created', xtype: 'statictextfield',  name: 'date_created'},
				{fieldLabel: 'Identity', xtype: 'hidden',  name: 'ident'}
			]}
    ],
	buttonAlign: 'right',
    buttons: [  {text: self.user.status != 'auth' ?  'Send Verification Email' : 'Update Details', 
				iconCls: 'icoSave', 
                    handler: function(){
                        if(self.frm.getForm().isValid()){
                            self.frm.getForm().submit({
                                url: '/rpc/user/',
                                waitMsg: 'Saving...',
                                success: function(frm, action){
									var data = Ext.decode(action.response.responseText);
									if(data.error){
										return;
									}
									if(self.user.status == 'welcome'){
										Ext.xh.msg("Please wait", "Email being sent");									
										location.href = '/profile/?confirm=sent'
										
									}else{
										Ext.xh.msg("Saved", "Details were updated");									
									}
                                },
                                failure: function(){
                                    Ext.xh.msg('OOOPS', 'Something went wrong !');
                                }

                            });

                        }
                    }
                }

    ]
});

this.frm.getForm().setValues(this.user);

} /* fgUserForm() */