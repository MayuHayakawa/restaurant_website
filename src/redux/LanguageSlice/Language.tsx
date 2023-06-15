export interface LanguageState {
    language: string
    about: string
    menu: string
    location: string
    order_online: string
    business_hours: string
    non_business_day: string
    opening: string
    closing: string
    about_us_sentence: string
    jump_to_menu_h2: string
    jump_to_menu_p: string
    jump_to_menu_link: string
}

export const English: LanguageState = {
    language: 'English',
    about: 'ABOUT US',
    menu: 'MENU',
    location: 'LOCATION',
    order_online: 'ORDER ONLINE',
    business_hours: 'Todays Hours',
    non_business_day: 'Non business day',
    opening: 'Now Opening',
    closing: 'Closed',
    about_us_sentence: 'We serve Korean food at affordable prices!',
    jump_to_menu_h2: 'Serving Authentic “Home Cooked” Korean Dishes',
    jump_to_menu_p: 'We suggest checking out our menu before you come in.',
    jump_to_menu_link: 'SEE MENU'
}

export const Korean: LanguageState = {
    language: 'Korean',
    about: '회사 소개',
    menu: '메뉴',
    location: '위치',
    order_online: '온라인 주문',
    business_hours: '오늘의 영업 시간',
    non_business_day: '오늘 휴무일',
    opening: '영업 중',
    closing: '닫기',
    about_us_sentence: '합리적인 가격으로 한식을 제공합니다!',
    jump_to_menu_h2: '정통 가정식 한식 요리 제공',
    jump_to_menu_p: '오시기 전에 메뉴를 확인하시기 바랍니다',
    jump_to_menu_link: '메뉴 보기'
}

export const Japanese: LanguageState = {
    language: 'Japanese',
    about: '私たちについて',
    menu: 'メニュー',
    location: 'ロケーション',
    order_online: 'オンライン注文',
    business_hours: '本日の営業時間',
    non_business_day: '休業日',
    opening: '営業中',
    closing: '閉店中',
    about_us_sentence: '私たちは韓国料理をお手頃価格で提供しています！',
    jump_to_menu_h2: '本格的な韓国家庭料理を提供しております',
    jump_to_menu_p: 'ご来店前にメニューをご確認いただくことをおすすめします',
    jump_to_menu_link: 'メニューはこちら'
}

export const Chinese: LanguageState = {
    language: 'Chinese',
    about: '关于我们',
    menu: '菜单',
    location: '地点',
    order_online: '在线订购',
    business_hours: '今天的工作时间',
    non_business_day: '今天关闭',
    opening: '开设',
    closing: '关闭',
    about_us_sentence: '我们提供价格合理的韩国食品!',
    jump_to_menu_h2: '提供正宗的 "家常菜 "韩式菜肴',
    jump_to_menu_p: '我们建议你在来之前先看看我们的菜单',
    jump_to_menu_link: '见菜单'
}

