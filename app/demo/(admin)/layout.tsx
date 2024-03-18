const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8 bg-rose-600 text-white">
      <h4>这是一个Admin页面中的内容</h4>
      {children}
    </div>
  )
}

export default AdminLayout
