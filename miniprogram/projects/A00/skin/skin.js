module.exports = {
	PID: 'A00', //居民小区

	NAV_COLOR: '#000000',
	NAV_BG: '#ffc037',

	MEET_NAME: '活动', 
 
	MENU_ITEM: ['首页', '活动日历', '我的'], // 第1,4,5菜单

	NEWS_CATE: '1=小区公告|rightpic,2=物业服务|leftpic,3=便民服务,4=小区规约,5=业委会',
	MEET_TYPE: '1=小区活动',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}