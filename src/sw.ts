/// <reference lib="WebWorker" />
declare const self: ServiceWorkerGlobalScope;

import { clientsClaim } from "workbox-core";

self.skipWaiting();
clientsClaim();
