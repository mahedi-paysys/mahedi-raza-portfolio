import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Download, FileText } from 'lucide-react'

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  title: string
}

export function CaseStudyModal({ isOpen, onClose, pdfUrl, title }: CaseStudyModalProps) {
  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-canvas/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-5xl h-[92vh] sm:h-[90vh] flex flex-col bg-surface border border-border/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} Case Study`}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-border/70 bg-surface/90 backdrop-blur-sm">
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                  <FileText size={18} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-medium text-ink truncate leading-tight">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-brand/10 text-brand font-medium">
                      PDF CASE STUDY
                    </span>
                    <span className="text-[11px] text-ink-faint hidden sm:inline">
                      Direct In-Site Viewer
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-ink-muted hover:text-ink hover:bg-canvas border border-border/70 hover:border-brand/40 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={14} />
                  <span className="hidden sm:inline">Open New Tab</span>
                </a>

                <a
                  href={pdfUrl}
                  download={`${title.toLowerCase().replace(/\s+/g, '-')}-case-study.pdf`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-ink-muted hover:text-ink hover:bg-canvas border border-border/70 hover:border-brand/40 transition-colors"
                  title="Download PDF"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 sm:p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-canvas transition-colors ml-1"
                  aria-label="Close Case Study"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* PDF Viewer Body */}
            <div className="flex-1 w-full h-full bg-canvas relative overflow-hidden flex flex-col">
              <object
                data={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                type="application/pdf"
                className="w-full h-full border-0"
              >
                {/* Fallback for devices/browsers that do not render inline PDFs */}
                <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-surface/50">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                    <FileText size={28} />
                  </div>
                  <h4 className="font-display text-lg font-medium text-ink mb-2">
                    Case Study PDF
                  </h4>
                  <p className="text-sm text-ink-muted max-w-md mb-6 leading-relaxed">
                    Your browser or device does not support embedded inline PDF previews. You can view or download the full document below:
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand text-white font-medium text-sm hover:bg-brand/90 transition-colors shadow-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Open PDF in New Window</span>
                    </a>
                    <a
                      href={pdfUrl}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface text-ink font-medium text-sm hover:bg-surface/80 transition-colors"
                    >
                      <Download size={16} />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
