import { createContext, useCallback, useContext } from 'react'
import { useToast } from '../hooks/useToast.js'
import Toast from '../components/Toast.jsx'

const ToastContext = createContext(null)

/** Menyediakan satu instance toast untuk seluruh aplikasi. */
export function ToastProvider({ children }) {
  const { toast, showToast } = useToast()

  const notify = useCallback((message) => showToast(message), [showToast])

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <Toast visible={toast.visible} message={toast.message} />
    </ToastContext.Provider>
  )
}

export function useToastContext() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToastContext harus dipakai di dalam <ToastProvider>')
  }
  return context
}
