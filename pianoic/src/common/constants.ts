const APP_URL = 'http://pianoic.co/'
const APP_URL_ONLOAD = 'http://search.pianoic.co/'
const APP_NAME = 'Pianoic'
const STORE_NAME = 'pianoic'

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

export { APP_URL, APP_NAME, HEADER_LINKS, FOOTER_LINKS, STORE_NAME, STATUS_TYPES, APP_URL_ONLOAD }
