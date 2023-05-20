const APP_URL = 'http://activitytime4u.com/'
const APP_URL_ONLOAD = 'http://search.activitytime4u.com/'
const APP_NAME = 'Activity Time 4u'
const STORE_NAME = 'activitytime4u'

const HEADER_LINKS = [
  {
    label: 'Gmail',
    url: 'https://mail.google.com/mail',
  },
  {
    label: 'Outlook',
    url: 'https://outlook.live.com/mail',
  },
  {
    label: 'Yahoo! Mail',
    url: 'https://mail.yahoo.com/',
  },
  {
    label: 'AOL Mail',
    url: 'https://www.aol.com/mail',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/',
  },
]

const FOOTER_LINKS = [
  {
    label: 'Terms',
    url: `${APP_URL}terms.html`,
  },
  {
    label: 'Privacy',
    url: `${APP_URL}policy.html`,
  },
  {
    label: 'Uninstall',
    url: `${APP_URL}uninstall.html`,
  },
  {
    label: 'About Us',
    url: `${APP_URL}about.html`,
  },
  {
    label: 'Contact',
    url: `${APP_URL}terms.html#terms-contact`,
  },
]

const STATUS_TYPES = { WORK: 'work', REST: 'rest' }

const STATUS_TIMES = {
  WORK: 60 * 60 * 1000,
  REST: 15 * 60 * 1000,
}
const INIT_DATA = {
  status: STATUS_TYPES.WORK,
  time: new Date().getTime(),
}

export {
  APP_URL,
  APP_NAME,
  HEADER_LINKS,
  FOOTER_LINKS,
  STORE_NAME,
  INIT_DATA,
  STATUS_TYPES,
  STATUS_TIMES,
  APP_URL_ONLOAD,
}
