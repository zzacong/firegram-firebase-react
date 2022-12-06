import { motion } from 'framer-motion'

export default function Progressbar({ progress }: { progress: number }) {
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  )
}
