import dynamic from 'next/dynamic'

const App = dynamic(() => import('./app'), { ssr: false })

const Index = () => {
  return <App />
}

export default Index
