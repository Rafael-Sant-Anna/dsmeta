package com.santanna.dsmeta.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.santanna.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	@Query("SELECT obj FROM Sale obj where obj.date BETWEEN :DtInicio and :DtFim ORDER BY obj.amount DESC")
	Page<Sale> findSales(LocalDate DtInicio, LocalDate DtFim, Pageable pageable);

}
