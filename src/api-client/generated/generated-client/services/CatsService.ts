/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cat } from "../models/Cat";
import type { CreateCatDto } from "../models/CreateCatDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class CatsService {
  /**
   * Create cat
   * @param requestBody
   * @returns Cat
   * @throws ApiError
   */
  public static catsControllerCreate(
    requestBody: CreateCatDto,
  ): CancelablePromise<Cat> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/cats",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        403: `Forbidden.`,
      },
    });
  }

  /**
   * @param id
   * @returns Cat The found record
   * @throws ApiError
   */
  public static catsControllerFindOne(id: string): CancelablePromise<Cat> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/cats/{id}",
      path: {
        id: id,
      },
    });
  }
}
