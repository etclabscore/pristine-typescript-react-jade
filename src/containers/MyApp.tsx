import React, { useState, useEffect } from "react";
import { useServiceRunner, useService } from "@etclabscore/jade-service-runner-react-hooks";
import EthereumJSONRPC from "@etclabscore/ethereum-json-rpc";

const useBlockNumber = (erpc: EthereumJSONRPC | undefined): [string] => {
  const [blockNumber, setBlockNumber]  = useState();

  useEffect(() => {
    if (!erpc) { return; }
    erpc.eth_blockNumber().then(setBlockNumber);
  }, [erpc]);

  return [blockNumber];
};

const MyApp = (props: any) => {
  const [serviceRunner] = useServiceRunner("http://localhost:8002");
  const [erpc] = useService<EthereumJSONRPC>(serviceRunner, "multi-geth", EthereumJSONRPC, "1.9.0", "mainnet");
  const [blockNumber] = useBlockNumber(erpc);

  if (!erpc || !blockNumber) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div style={{textAlign: "center"}}>
        <img alt="jade-logo" src="https://github.com/etclabscore/jade-media-assets/blob/master/jade-logo-light/jade-logo-light%20(PNG)/256x256.png?raw=true" />
      </div>
      <div style={{textAlign: "center", width: "300px", margin: "0 auto", paddingBottom: "5vh", color: "gray"}}>
        <span>
          Truly peer-to-peer decentralized applications.
        </span>
      </div>
      <div style={{textAlign: "center"}}>
        <b>BlockNumber: </b>
        <span>{parseInt(blockNumber, 16)}</span>
      </div>
    </div>
  );
};

export default MyApp;
