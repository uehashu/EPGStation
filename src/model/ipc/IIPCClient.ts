import * as apid from '../../../api';
import { AddVideoFileOption } from '../operator/recorded/IRecordedManageModel';

export interface IPCReservationManageModel {
    getBroadcastStatus(): Promise<apid.BroadcastStatus>;
    add(option: apid.ManualReserveOption): Promise<apid.ReserveId>;
    update(reserveId: apid.ReserveId): Promise<void>;
    updateRule(ruleId: apid.RuleId): Promise<void>;
    updateAll(): Promise<void>;
    cancel(reserveId: apid.ReserveId): Promise<void>;
    removeSkip(reserveId: apid.ReserveId): Promise<void>;
    removeOverlap(reserveId: apid.ReserveId): Promise<void>;
    edit(reserveId: apid.ReserveId, option: apid.EditManualReserveOption): Promise<void>;
    clean(): Promise<void>;
}

export interface IPCRecordedManageModel {
    delete(recordedId: apid.RecordedId): Promise<void>;
    updateVideoFileSize(videoFileId: apid.VideoFileId): Promise<void>;
    addVideoFile(option: AddVideoFileOption): Promise<apid.VideoFileId>;
    deleteVideoFile(videoFileId: apid.VideoFileId): Promise<void>;
}

export interface IPCRuleManageModel {
    add(rule: apid.AddRuleOption): Promise<apid.RuleId>;
    update(rule: apid.Rule): Promise<void>;
    enable(ruleId: apid.RuleId): Promise<void>;
    disable(ruleId: apid.RuleId): Promise<void>;
    delete(ruleId: apid.RuleId): Promise<void>;
    deletes(ruleIds: apid.RuleId[]): Promise<apid.RuleId[]>;
}

export default interface IIPCClient {
    reserveation: IPCReservationManageModel;
    recorded: IPCRecordedManageModel;
    rule: IPCRuleManageModel;
}