import './index.css'

const TabItem = props => {
  const {tabDetails, changetab, activeTabId} = props
  const {tabId, displayText} = tabDetails

  const activetab = activeTabId === tabId ? 'activeTab' : ''
  const changeActiveTab = () => {
    changetab(tabId)
  }
  return (
    <li className={`tabItem ${activetab}`}>
      <button className={`tabButton ${activetab}`} onClick={changeActiveTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
