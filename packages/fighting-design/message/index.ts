import messageVue from './src/message.vue'
import { installFn } from '../_utils'
import { useMessage } from './src/hooks'

const { renderInstance } = useMessage(messageVue)

export const FMessage = installFn(renderInstance, 'FMessage')

export * from './src/interface'
