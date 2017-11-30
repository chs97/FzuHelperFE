import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './pages/App'
import './style/theme.less'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
