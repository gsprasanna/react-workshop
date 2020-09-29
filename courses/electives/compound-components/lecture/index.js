import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import LoginForm from 'YesterTech/LoginForm'
import SignupForm from 'YesterTech/SignupForm'
import 'YesterTech/styles/global-styles.scss'
import './styles.scss'

const TabsContext = React.createContext()

export function Tabs({ children, ...props }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const context = {
    selectedIndex,
    setSelectedIndex
  }

  return (
    <TabsContext.Provider value={context}>
      <div className="tabs" {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabContext = React.createContext()

function TabList({ children, ...props }) {
  const { selectedIndex, setSelectedIndex } = useContext(TabsContext)

  children = React.Children.map(children, (child, index) => {
    const context = {
      selected: index === selectedIndex,
      onClick: () => setSelectedIndex(index)
    }

    return <TabContext.Provider value={context}>{child}</TabContext.Provider>
  })

  return (
    <div className="tab-list" {...props}>
      {children}
    </div>
  )
}

function Tab({ children, disabled, ...props }) {
  const { onClick, selected } = useContext(TabContext)

  return (
    <button
      role="tab"
      {...props}
      aria-selected={selected}
      className="tab"
      disabled={disabled}
      data-selected={selected ? '' : undefined}
      onClick={disabled ? null : onClick}
    >
      {children}
    </button>
  )
}

function TabPanels({ children }) {
  const { selectedIndex } = useContext(TabsContext)

  children = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      selected: index === selectedIndex
    })
  })

  return <div className="tab-panels">{children}</div>
}

function TabPanel({ children, selected }) {
  return (
    <div className="tab-panel" hidden={!selected}>
      {children}
    </div>
  )
}

function App() {
  return (
    <Tabs>
      <TabList>
        <div>
          <Tab>Login</Tab>
        </div>
        <Tab>Signup</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <LoginForm />
        </TabPanel>
        <TabPanel>
          <SignupForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
