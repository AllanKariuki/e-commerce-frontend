import type { AxiosResponse } from "axios";
import { axiosInstance } from "./index";
import type { Product } from "../types/product";

// Response shape returned by the backend `POST /api/search/visual` view
// (see e-commerce-backend products/views.py::VisualSearchView). Each result
// is a `ProductSerializer` payload with a `distance` float appended by the
// view.

export interface VisualSearchResult extends Product {
  distance?: number;
}

export interface VisualSearchQueryMeta {
  image_url: string;
  embedding_dim: number;
  latency_ms: number;
}

export interface VisualSearchResponse {
  query: VisualSearchQueryMeta;
  count: number;
  results: VisualSearchResult[];
}

export interface VisualSearchOptions {
  /** Caller-controlled cap; backend clamps to 50. */
  limit?: number;
  /** Optional AbortSignal so callers can cancel in-flight requests. */
  signal?: AbortSignal;
}

/**
 * Upload an image and return the top visually-similar products. We post the
 * file as multipart `FormData` through the shared axiosInstance. We do NOT set
 * `Content-Type` ourselves — axios detects the FormData body and lets the
 * browser emit `multipart/form-data; boundary=…` with the correct boundary.
 * Setting it by hand would omit the boundary and the backend would fail to
 * parse the upload.
 *
 * The axios response interceptor in `./axios.ts` already unwraps the body, so
 * the resolved value here is the JSON payload, not an AxiosResponse.
 *
 * Manual test: from the browser devtools Network tab, trigger a visual search
 * and confirm the `POST /search/visual` request carries
 * `Content-Type: multipart/form-data; boundary=…` (boundary present) and an
 * `image` form field — not `application/json`.
 */
export const visualSearch = async (
  file: File,
  options: VisualSearchOptions = {}
): Promise<VisualSearchResponse> => {
  const formData = new FormData();
  formData.append("image", file);

  const url =
    typeof options.limit === "number"
      ? `/search/visual?limit=${options.limit}`
      : "/search/visual";

  const response = (await axiosInstance.post(url, formData, {
    signal: options.signal,
  })) as unknown as AxiosResponse<VisualSearchResponse> | VisualSearchResponse;

  // The interceptor returns response.data, but typings still surface as
  // AxiosResponse — narrow defensively in case the interceptor is ever
  // changed.
  if (response && typeof response === "object" && "data" in response) {
    return (response as AxiosResponse<VisualSearchResponse>).data;
  }
  return response as VisualSearchResponse;
};
