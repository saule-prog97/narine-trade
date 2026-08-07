import binance from './binance.png'
import bingx from './bingx.png'
import bitget from './bitget.png'
import bitunix from './bitunix.png'
import blofin from './blofin.png'
import bybit from './bybit.png'
import kucoin from './kucoin.png'
import mexc from './mexc.png'
import toobit from './toobit.png'
import weex from './weex.png'

/**
 * Официальные знаки бирж, приведённые к 128×128.
 *
 * Источник — иконки мобильных приложений бирж (512×512), кроме BingX и
 * KuCoin: там в иконке приложения есть надпись «PRO» и юбилейный декор,
 * поэтому для них взяты чистые знаки с сайтов самих бирж.
 *
 * Ключ совпадает с id биржи в entities/exchange.
 */
export const EXCHANGE_LOGOS: Record<string, string> = {
  binance,
  bingx,
  bitget,
  bitunix,
  blofin,
  bybit,
  kucoin,
  mexc,
  toobit,
  weex,
}
