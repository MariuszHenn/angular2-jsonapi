import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { DatastoreConfig } from '../interfaces/datastore-config.interface';
import { JsonApiQueryData } from '../models/json-api-query-data';
import { JsonApiModel } from '../models/json-api.model';
export declare type ModelType<T extends JsonApiModel> = {
    new (datastore: JsonApiDatastore, data: any): T;
};
export declare class JsonApiDatastore {
    protected http: HttpClient;
    protected config: DatastoreConfig;
    private _store;
    private toQueryString;
    constructor(http: HttpClient);
    private _headers;
    headers: Headers;
    protected readonly datastoreConfig: DatastoreConfig;
    private readonly getDirtyAttributes;
    private static getDirtyAttributes(attributesMetadata);
    /** @deprecated - use findAll method to take all models **/
    query<T extends JsonApiModel>(modelType: ModelType<T>, params?: any, headers?: Headers, customUrl?: string): Observable<T[]>;
    findAll<T extends JsonApiModel>(modelType: ModelType<T>, params?: any, headers?: Headers, customUrl?: string): Observable<JsonApiQueryData<T>>;
    findRecord<T extends JsonApiModel>(modelType: ModelType<T>, id: string, params?: any, headers?: Headers, customUrl?: string): Observable<T>;
    createRecord<T extends JsonApiModel>(modelType: ModelType<T>, data?: any): T;
    saveRecord<T extends JsonApiModel>(attributesMetadata: any, model: T, params?: any, headers?: Headers, customUrl?: string): Observable<T>;
    deleteRecord<T extends JsonApiModel>(modelType: ModelType<T>, id: string, headers?: Headers, customUrl?: string): Observable<Response>;
    peekRecord<T extends JsonApiModel>(modelType: ModelType<T>, id: string): T | null;
    peekAll<T extends JsonApiModel>(modelType: ModelType<T>): T[];
    deserializeModel<T extends JsonApiModel>(modelType: ModelType<T>, data: any): T;
    addToStore(modelOrModels: JsonApiModel | JsonApiModel[]): void;
    protected buildUrl<T extends JsonApiModel>(modelType: ModelType<T>, params?: any, id?: string, customUrl?: string): string;
    protected getRelationships(data: any): any;
    protected isValidToManyRelation(objects: Array<any>): boolean;
    protected buildSingleRelationshipData(model: JsonApiModel): any;
    protected extractQueryData<T extends JsonApiModel>(body: any, modelType: ModelType<T>, withMeta?: boolean): T[] | JsonApiQueryData<T>;
    protected extractRecordData<T extends JsonApiModel>(res: HttpResponse<Object>, modelType: ModelType<T>, model?: T): T;
    protected handleError(error: any): Observable<never>;
    protected parseMeta(body: any, modelType: ModelType<JsonApiModel>): any;
    /** @deprecated - use buildHeaders method to build request headers **/
    protected getOptions(customHeaders?: Headers): any;
    protected buildHeaders(customHeaders?: Headers): HttpHeaders;
    protected resetMetadataAttributes<T extends JsonApiModel>(res: T, attributesMetadata: any, modelType: ModelType<T>): T;
    protected updateRelationships<T extends JsonApiModel>(model: T, relationships: any): T;
    protected transformSerializedNamesToPropertyNames<T extends JsonApiModel>(modelType: ModelType<T>, attributes: any): any;
    protected getModelPropertyNames(model: JsonApiModel): any;
    private _toQueryString(params);
}
