import { data, IReport, ReportType } from './data';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from './dtos/report.dto';

interface IReportData {
  amount: number;
  source: string;
}

@Injectable()
export class AppService {
  getAllReport(type: ReportType): ReportResponseDto[] {
    const report = data.report.filter((report) => report.type === type);

    if (!(report && report.length)) return [];

    return report.map((m) => new ReportResponseDto(m));
  }

  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.report.find(
      (report) => report.type === type && report.id === id,
    );

    if (!report) return;

    return new ReportResponseDto(report);
  }

  createReport(
    type: ReportType,
    { source, amount }: Partial<IReportData>,
  ): ReportResponseDto {
    const newReport: IReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };

    data.report.push(newReport);

    return new ReportResponseDto(newReport);
  }

  updateReport(
    type: ReportType,
    id: string,
    { source, amount }: Partial<IReportData>,
  ): ReportResponseDto {
    const item = data.report
      .filter((f) => f.type === type)
      .find((f) => f.id === id);

    if (!item) return;

    item.amount = amount ?? item.amount;
    item.source = source ?? item.source;

    return new ReportResponseDto(item);
  }

  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((f) => f.id === id);

    if (reportIndex === -1) return;

    data.report.splice(reportIndex, 1);
  }
}
