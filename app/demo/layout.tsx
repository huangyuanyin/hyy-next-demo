const DemoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="demo">
      <h2>这是Demo页面的母版</h2>
      <hr />
      {children} 
    </div>
  )
}

export default DemoLayout