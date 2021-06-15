//package com.furama.backend.aspect;
//
//
//import com.furama.backend.Commons.ReadAndWrite;
//import org.aspectj.lang.JoinPoint;
//import org.aspectj.lang.annotation.After;
//import org.aspectj.lang.annotation.AfterThrowing;
//import org.aspectj.lang.annotation.Aspect;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//
//import java.time.LocalDateTime;
//
//
//@Aspect
//@Component
//public class EmployeeAspect {
//
//    @After("execution(* com.furama.backend.controller.EmployeeController.save(..))")
//    public void afterCallMethodSave(JoinPoint joinPoint) {
//        System.err.println("After save run"+ joinPoint.getSignature().getName()+ "Time" + LocalDateTime.now());
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String currentPrincipalName = authentication.getName();
//
//        ReadAndWrite.writeFileString("customer.csv","User Name: ["+ currentPrincipalName +"]After save run "+ joinPoint.getSignature().getName()+ " Time " + LocalDateTime.now(),true);
//    }
//
//    @After("execution(* com.furama.backend.controller.EmployeeController.update(..))")
//    public void updateObject(JoinPoint joinPoint) {
//        System.err.println("After save run"+ joinPoint.getSignature().getName()+ "Time" + LocalDateTime.now());
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String currentPrincipalName = authentication.getName();
//
//        ReadAndWrite.writeFileString("employee.csv","User Name: ["+ currentPrincipalName +"]After save run "+ joinPoint.getSignature().getName()+ " Time " + LocalDateTime.now(),true);
//    }
//
//    //
//    @After("execution(* com.furama.backend.controller.EmployeeController.delete(..))")
//    public void delete(JoinPoint joinPoint) {
//        System.err.println("After save run"+ joinPoint.getSignature().getName()+ "Time" + LocalDateTime.now());
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String currentPrincipalName = authentication.getName();
//
//        ReadAndWrite.writeFileString("employee.csv","User Name: ["+ currentPrincipalName +"]After save run "+ joinPoint.getSignature().getName()+ " Time " + LocalDateTime.now(),true);
//    }
//
//    @AfterThrowing(value = "execution(* com.furama.backend.controller.EmployeeController.*(..))",throwing = "e")
//    public void beforeThrowEx(JoinPoint joinPoint, Exception e) {
//        System.err.println("After Throwing"+ joinPoint.getSignature().getName()+ "Time" + LocalDateTime.now());
//        ReadAndWrite.writeFileString("employee.csv","After Throwing ["+ joinPoint.getSignature().getName()+ "] Time " + LocalDateTime.now(),true);
//    }
//
//}
