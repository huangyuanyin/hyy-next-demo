const DemoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="demo">
      <h3>这是DemoList页面的母版</h3>
      <hr />
      {children} 
    </div>
  )
}

export default DemoLayout