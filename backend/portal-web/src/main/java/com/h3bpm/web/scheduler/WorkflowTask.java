package com.h3bpm.web.scheduler;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.h3bpm.web.entity.WorkFlowTask;
import com.h3bpm.web.service.WorkFlowService;
import com.h3bpm.web.service.WorkFlowTaskService;


@Component
public class WorkflowTask {
	private static final Logger logger = LoggerFactory.getLogger(WorkflowTask.class);

	@Autowired
	private WorkFlowService workFlowService;
	
	@Autowired
	private WorkFlowTaskService workFlowTaskService;


	/**
	 * @Author tonghao
	 * @Description 设置每5分钟执行一次
	 * @Date 14:23 2019/1/24
	 * @Param
	 * @return void
	 **/
	@Scheduled(cron = "0 0/5 * * * ?")
	private void process() {
		logger.info("======== autoStartWorkflowTask start ========");
		
		List<WorkFlowTask> workflowTasks = workFlowTaskService.findUnFinishWorkFlowTask();
		for (WorkFlowTask workFlowTask : workflowTasks) {
			workFlowService.createWorkFlow(workFlowTask.getId());
		}
		
		logger.info("======== autoStartWorkflowTask end ========");
	}

	/**
	 * @Author lzf
	 * @Description
	 * @Data
	 * @Param
	 * @return void
	 **/
	@Scheduled(cron = "0 0 8 ? * WED")//每周三上午8点执行一次
	private void addWeeklyReportProcess() {
		logger.info("======== addWeeklyReportProcess start ========");

		workFlowTaskService.addWeeklyReportWorkFlowTask();

		logger.info("======== addWeeklyReportProcess end ========");
	}

}
