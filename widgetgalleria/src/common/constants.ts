const APP_URL = 'http://widgetgalleria.com/'
const APP_URL_ONLOAD = 'http://search.widgetgalleria.com/'
const APP_NAME = 'Widget Galleria'
const STORE_NAME = 'widgetgalleria'

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

const INIT_DATA = {
  stopwatch: {
    running: false,
    time: 0,
  },
}

export { APP_URL, APP_NAME, HEADER_LINKS, FOOTER_LINKS, STORE_NAME, INIT_DATA, APP_URL_ONLOAD }
