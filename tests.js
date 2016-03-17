module('Проверка ct_timestamp');
test('ct_getCookie()', function() {
	equal(ct_getCookie('ct_timestamp').search("^([0-9]){10}") , 0, 'ct_timestamp == ^([0-9]){10}');
	equal(ct_getCookie('some_test_cookie'), undefined, 'Some_test_cookie == undefined');
});

module('Проверка createXMLHTTPObject()');
test('ct_getCookie()', function() {
	equal(typeof(createXMLHTTPObject()) , 'object', 'typeof -> Object');
});

module('Проверка sendRequest()');
test('ct_getCookie()', function() {
	equal(sendRequest(ct_ajaxurl+'?'+Math.random(),ct_callback,'action=ct_get_cookie')==1, false, 'return != 1');
	equal(sendRequest(ct_ajaxurl+'?'+Math.random(),ct_callback,'action=ct_get_cookie')==2, false, 'return != 2');
	equal(sendRequest(ct_ajaxurl+'?'+Math.random(),ct_callback,'action=ct_get_cookie')==3, false, 'return != 3');
	equal(sendRequest(ct_ajaxurl+'?'+Math.random(),ct_callback,'action=ct_get_cookie')==4, false, 'return != 4');
	equal(sendRequest(ct_ajaxurl+'?'+Math.random(),ct_callback,'action=ct_get_cookie') , undefined, 'return== undefined');
});