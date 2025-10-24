package wisdom.wisdomdatacenter.bewisdomcloud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wisdom.wisdomdatacenter.bewisdomcloud.entity.Vps;

import java.util.Optional;
@Repository
public interface VpsRepository extends JpaRepository<Vps, Long> {
    Optional<Vps> findByHostname(String hostname);
    boolean existsByHostname(String hostname);
    boolean existsByIpPublic(String ipPublic);

}
