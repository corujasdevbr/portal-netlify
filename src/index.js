import './assets/css/vendor/bootstrap.min.css'
import './assets/css/vendor/bootstrap.rtl.only.min.css'
import 'react-circular-progressbar/dist/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-table/react-table.css'
import 'react-image-lightbox/style.css'
import 'video.js/dist/video-js.css'
import {
    isMultiColorActive,
    defaultColor,
    themeColorStorageKey,
    isDarkSwitchActive,
} from './constants/defaultValues'
import Amplify from 'aws-amplify'
import config from './config'

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    },
    Storage: {
        region: config.s3.REGION,
        bucket: config.s3.BUCKET,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
    },
    API: {
        endpoints: [
            {
                name: 'portal-api',
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION,
            },
        ],
    },
})
const color =
    (isMultiColorActive || isDarkSwitchActive) &&
    localStorage.getItem(themeColorStorageKey)
        ? localStorage.getItem(themeColorStorageKey)
        : defaultColor

localStorage.setItem(themeColorStorageKey, color)

let render = () => {
    import('./assets/css/sass/themes/dumbs.' + color + '.scss').then(x => {
        require('./AppRenderer')
    })
}
render()
