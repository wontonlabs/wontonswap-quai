import { ChainId } from 'moonbeamswap'
import MULTICALL_ABI from './abi.json'
import { multicall } from '../../moonbase_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.STANDALONE]: multicall,
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
