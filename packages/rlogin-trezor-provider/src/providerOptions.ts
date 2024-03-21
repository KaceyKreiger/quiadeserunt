import { TrezorProvider, TrezorProviderOptions } from './TrezorProvider'

export const trezorProviderOptions = {
  display: {
    logo: 'data:image/png;base64,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',
    name: 'Trezor',
    description: 'Connect your Trezor Hardware Wallet'
  },
  connector: async (ProviderPackage: any, options: TrezorProviderOptions) => {
    const provider = new ProviderPackage(options)
    await provider.connect()
    return provider
  },
  package: TrezorProvider
}