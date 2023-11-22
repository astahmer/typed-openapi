export namespace Schemas {
  // <Schemas>
  export type Port = {
    IP?: string | undefined;
    PrivatePort: number;
    PublicPort?: number | undefined;
    Type: "tcp" | "udp" | "sctp";
  };
  export type MountPoint = Partial<{
    Type: "bind" | "volume" | "tmpfs" | "npipe" | "cluster";
    Name: string;
    Source: string;
    Destination: string;
    Driver: string;
    Mode: string;
    RW: boolean;
    Propagation: string;
  }>;
  export type DeviceMapping = Partial<{ PathOnHost: string; PathInContainer: string; CgroupPermissions: string }>;
  export type DeviceRequest = Partial<{
    Driver: string;
    Count: number;
    DeviceIDs: Array<string>;
    Capabilities: Array<Array<string>>;
    Options: unknown;
  }>;
  export type ThrottleDevice = Partial<{ Path: string; Rate: number }>;
  export type Mount = Partial<{
    Target: string;
    Source: string;
    Type: "bind" | "volume" | "tmpfs" | "npipe" | "cluster";
    ReadOnly: boolean;
    Consistency: string;
    BindOptions: Partial<{
      Propagation: "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave";
      NonRecursive: boolean;
      CreateMountpoint: boolean;
    }>;
    VolumeOptions: Partial<{
      NoCopy: boolean;
      Labels: unknown;
      DriverConfig: Partial<{ Name: string; Options: unknown }>;
    }>;
    TmpfsOptions: Partial<{ SizeBytes: number; Mode: number }>;
  }>;
  export type RestartPolicy = Partial<{
    Name: "" | "no" | "always" | "unless-stopped" | "on-failure";
    MaximumRetryCount: number;
  }>;
  export type Resources = Partial<{
    CpuShares: number;
    Memory: number;
    CgroupParent: string;
    BlkioWeight: number;
    BlkioWeightDevice: Array<Partial<{ Path: string; Weight: number }>>;
    BlkioDeviceReadBps: Array<ThrottleDevice>;
    BlkioDeviceWriteBps: Array<ThrottleDevice>;
    BlkioDeviceReadIOps: Array<ThrottleDevice>;
    BlkioDeviceWriteIOps: Array<ThrottleDevice>;
    CpuPeriod: number;
    CpuQuota: number;
    CpuRealtimePeriod: number;
    CpuRealtimeRuntime: number;
    CpusetCpus: string;
    CpusetMems: string;
    Devices: Array<DeviceMapping>;
    DeviceCgroupRules: Array<string>;
    DeviceRequests: Array<DeviceRequest>;
    KernelMemoryTCP: number;
    MemoryReservation: number;
    MemorySwap: number;
    MemorySwappiness: number;
    NanoCpus: number;
    OomKillDisable: boolean;
    Init: boolean | null;
    PidsLimit: number | null;
    Ulimits: Array<Partial<{ Name: string; Soft: number; Hard: number }>>;
    CpuCount: number;
    CpuPercent: number;
    IOMaximumIOps: number;
    IOMaximumBandwidth: number;
  }>;
  export type Limit = Partial<{ NanoCPUs: number; MemoryBytes: number; Pids: number }>;
  export type GenericResources = Array<
    Partial<{
      NamedResourceSpec: Partial<{ Kind: string; Value: string }>;
      DiscreteResourceSpec: Partial<{ Kind: string; Value: number }>;
    }>
  >;
  export type ResourceObject = Partial<{ NanoCPUs: number; MemoryBytes: number; GenericResources: GenericResources }>;
  export type HealthConfig = Partial<{
    Test: Array<string>;
    Interval: number;
    Timeout: number;
    Retries: number;
    StartPeriod: number;
  }>;
  export type HealthcheckResult = Partial<{ Start: string; End: string; ExitCode: number; Output: string }> | null;
  export type Health = Partial<{
    Status: "none" | "starting" | "healthy" | "unhealthy";
    FailingStreak: number;
    Log: Array<HealthcheckResult>;
  }> | null;
  export type PortBinding = Partial<{ HostIp: string; HostPort: string }>;
  export type PortMap = unknown;
  export type HostConfig = Resources &
    Partial<{
      Binds: Array<string>;
      ContainerIDFile: string;
      LogConfig: Partial<{
        Type: "json-file" | "syslog" | "journald" | "gelf" | "fluentd" | "awslogs" | "splunk" | "etwlogs" | "none";
        Config: unknown;
      }>;
      NetworkMode: string;
      PortBindings: PortMap;
      RestartPolicy: RestartPolicy;
      AutoRemove: boolean;
      VolumeDriver: string;
      VolumesFrom: Array<string>;
      Mounts: Array<Mount>;
      ConsoleSize: Array<number> | null;
      Annotations: unknown;
      CapAdd: Array<string>;
      CapDrop: Array<string>;
      CgroupnsMode: "private" | "host";
      Dns: Array<string>;
      DnsOptions: Array<string>;
      DnsSearch: Array<string>;
      ExtraHosts: Array<string>;
      GroupAdd: Array<string>;
      IpcMode: string;
      Cgroup: string;
      Links: Array<string>;
      OomScoreAdj: number;
      PidMode: string;
      Privileged: boolean;
      PublishAllPorts: boolean;
      ReadonlyRootfs: boolean;
      SecurityOpt: Array<string>;
      StorageOpt: unknown;
      Tmpfs: unknown;
      UTSMode: string;
      UsernsMode: string;
      ShmSize: number;
      Sysctls: unknown;
      Runtime: string;
      Isolation: "default" | "process" | "hyperv";
      MaskedPaths: Array<string>;
      ReadonlyPaths: Array<string>;
    }>;
  export type ContainerConfig = Partial<{
    Hostname: string;
    Domainname: string;
    User: string;
    AttachStdin: boolean;
    AttachStdout: boolean;
    AttachStderr: boolean;
    ExposedPorts: unknown | null;
    Tty: boolean;
    OpenStdin: boolean;
    StdinOnce: boolean;
    Env: Array<string>;
    Cmd: Array<string>;
    Healthcheck: HealthConfig;
    ArgsEscaped: boolean | null;
    Image: string;
    Volumes: unknown;
    WorkingDir: string;
    Entrypoint: Array<string>;
    NetworkDisabled: boolean | null;
    MacAddress: string | null;
    OnBuild: Array<string> | null;
    Labels: unknown;
    StopSignal: string | null;
    StopTimeout: number | null;
    Shell: Array<string> | null;
  }>;
  export type EndpointIPAMConfig = Partial<{
    IPv4Address: string;
    IPv6Address: string;
    LinkLocalIPs: Array<string>;
  }> | null;
  export type EndpointSettings = Partial<{
    IPAMConfig: EndpointIPAMConfig;
    Links: Array<string>;
    Aliases: Array<string>;
    NetworkID: string;
    EndpointID: string;
    Gateway: string;
    IPAddress: string;
    IPPrefixLen: number;
    IPv6Gateway: string;
    GlobalIPv6Address: string;
    GlobalIPv6PrefixLen: number;
    MacAddress: string;
    DriverOpts: unknown | null;
  }>;
  export type NetworkingConfig = Partial<{ EndpointsConfig: unknown }>;
  export type Address = Partial<{ Addr: string; PrefixLen: number }>;
  export type NetworkSettings = Partial<{
    Bridge: string;
    SandboxID: string;
    HairpinMode: boolean;
    LinkLocalIPv6Address: string;
    LinkLocalIPv6PrefixLen: number;
    Ports: PortMap;
    SandboxKey: string;
    SecondaryIPAddresses: Array<Address> | null;
    SecondaryIPv6Addresses: Array<Address> | null;
    EndpointID: string;
    Gateway: string;
    GlobalIPv6Address: string;
    GlobalIPv6PrefixLen: number;
    IPAddress: string;
    IPPrefixLen: number;
    IPv6Gateway: string;
    MacAddress: string;
    Networks: unknown;
  }>;
  export type GraphDriverData = { Name: string; Data: unknown };
  export type ChangeType = 0 | 1 | 2;
  export type FilesystemChange = { Path: string; Kind: ChangeType };
  export type ImageInspect = Partial<{
    Id: string;
    RepoTags: Array<string>;
    RepoDigests: Array<string>;
    Parent: string;
    Comment: string;
    Created: string;
    Container: string;
    ContainerConfig: ContainerConfig;
    DockerVersion: string;
    Author: string;
    Config: ContainerConfig;
    Architecture: string;
    Variant: string | null;
    Os: string;
    OsVersion: string | null;
    Size: number;
    VirtualSize: number;
    GraphDriver: GraphDriverData;
    RootFS: { Type: string; Layers?: Array<string> | undefined };
    Metadata: Partial<{ LastTagTime: string | null }>;
  }>;
  export type ImageSummary = {
    Id: string;
    ParentId: string;
    RepoTags: Array<string>;
    RepoDigests: Array<string>;
    Created: number;
    Size: number;
    SharedSize: number;
    VirtualSize?: number | undefined;
    Labels: unknown;
    Containers: number;
  };
  export type AuthConfig = Partial<{ username: string; password: string; email: string; serveraddress: string }>;
  export type ProcessConfig = Partial<{
    privileged: boolean;
    user: string;
    tty: boolean;
    entrypoint: string;
    arguments: Array<string>;
  }>;
  export type ObjectVersion = Partial<{ Index: number }>;
  export type Topology = unknown;
  export type ClusterVolumeSpec = Partial<{
    Group: string;
    AccessMode: Partial<{
      Scope: "single" | "multi";
      Sharing: "none" | "readonly" | "onewriter" | "all";
      MountVolume: Partial<{}>;
      Secrets: Array<Partial<{ Key: string; Secret: string }>>;
      AccessibilityRequirements: Partial<{ Requisite: Array<Topology>; Preferred: Array<Topology> }>;
      CapacityRange: Partial<{ RequiredBytes: number; LimitBytes: number }>;
      Availability: "active" | "pause" | "drain";
    }>;
  }>;
  export type ClusterVolume = Partial<{
    ID: string;
    Version: ObjectVersion;
    CreatedAt: string;
    UpdatedAt: string;
    Spec: ClusterVolumeSpec;
    Info: Partial<{
      CapacityBytes: number;
      VolumeContext: unknown;
      VolumeID: string;
      AccessibleTopology: Array<Topology>;
    }>;
    PublishStatus: Array<
      Partial<{
        NodeID: string;
        State: "pending-publish" | "published" | "pending-node-unpublish" | "pending-controller-unpublish";
        PublishContext: unknown;
      }>
    >;
  }>;
  export type Volume = {
    Name: string;
    Driver: string;
    Mountpoint: string;
    CreatedAt?: string | undefined;
    Status?: unknown | undefined;
    Labels: unknown;
    Scope: "local" | "global";
    ClusterVolume?: ClusterVolume | undefined;
    Options: unknown;
    UsageData?: { Size: number; RefCount: number } | null | undefined;
  };
  export type VolumeCreateOptions = Partial<{
    Name: string;
    Driver: string;
    DriverOpts: unknown;
    Labels: unknown;
    ClusterVolumeSpec: ClusterVolumeSpec;
  }>;
  export type VolumeListResponse = Partial<{ Volumes: Array<Volume>; Warnings: Array<string> }>;
  export type IPAMConfig = Partial<{ Subnet: string; IPRange: string; Gateway: string; AuxiliaryAddresses: unknown }>;
  export type IPAM = Partial<{ Driver: string; Config: Array<IPAMConfig>; Options: unknown }>;
  export type NetworkContainer = Partial<{
    Name: string;
    EndpointID: string;
    MacAddress: string;
    IPv4Address: string;
    IPv6Address: string;
  }>;
  export type Network = Partial<{
    Name: string;
    Id: string;
    Created: string;
    Scope: string;
    Driver: string;
    EnableIPv6: boolean;
    IPAM: IPAM;
    Internal: boolean;
    Attachable: boolean;
    Ingress: boolean;
    Containers: unknown;
    Options: unknown;
    Labels: unknown;
  }>;
  export type ErrorDetail = Partial<{ code: number; message: string }>;
  export type ProgressDetail = Partial<{ current: number; total: number }>;
  export type ImageID = Partial<{ ID: string }>;
  export type BuildInfo = Partial<{
    id: string;
    stream: string;
    error: string;
    errorDetail: ErrorDetail;
    status: string;
    progress: string;
    progressDetail: ProgressDetail;
    aux: ImageID;
  }>;
  export type BuildCache = Partial<{
    ID: string;
    Parent: string | null;
    Parents: Array<string> | null;
    Type: "internal" | "frontend" | "source.local" | "source.git.checkout" | "exec.cachemount" | "regular";
    Description: string;
    InUse: boolean;
    Shared: boolean;
    Size: number;
    CreatedAt: string;
    LastUsedAt: string | null;
    UsageCount: number;
  }>;
  export type CreateImageInfo = Partial<{
    id: string;
    error: string;
    errorDetail: ErrorDetail;
    status: string;
    progress: string;
    progressDetail: ProgressDetail;
  }>;
  export type PushImageInfo = Partial<{
    error: string;
    status: string;
    progress: string;
    progressDetail: ProgressDetail;
  }>;
  export type ErrorResponse = { message: string };
  export type IdResponse = { Id: string };
  export type PluginMount = {
    Name: string;
    Description: string;
    Settable: Array<string>;
    Source: string;
    Destination: string;
    Type: string;
    Options: Array<string>;
  };
  export type PluginDevice = { Name: string; Description: string; Settable: Array<string>; Path: string };
  export type PluginEnv = { Name: string; Description: string; Settable: Array<string>; Value: string };
  export type PluginInterfaceType = { Prefix: string; Capability: string; Version: string };
  export type PluginPrivilege = Partial<{ Name: string; Description: string; Value: Array<string> }>;
  export type Plugin = {
    Id?: string | undefined;
    Name: string;
    Enabled: boolean;
    Settings: { Mounts: Array<PluginMount>; Env: Array<string>; Args: Array<string>; Devices: Array<PluginDevice> };
    PluginReference?: string | undefined;
    Config: {
      DockerVersion?: string | undefined;
      Description: string;
      Documentation: string;
      Interface: {
        Types: Array<PluginInterfaceType>;
        Socket: string;
        ProtocolScheme?: "" | "moby.plugins.http/v1" | undefined;
      };
      Entrypoint: Array<string>;
      WorkDir: string;
      User?: Partial<{ UID: number; GID: number }> | undefined;
      Network: { Type: string };
      Linux: { Capabilities: Array<string>; AllowAllDevices: boolean; Devices: Array<PluginDevice> };
      PropagatedMount: string;
      IpcHost: boolean;
      PidHost: boolean;
      Mounts: Array<PluginMount>;
      Env: Array<PluginEnv>;
      Args: { Name: string; Description: string; Settable: Array<string>; Value: Array<string> };
      rootfs?: Partial<{ type: string; diff_ids: Array<string> }> | undefined;
    };
  };
  export type NodeSpec = Partial<{
    Name: string;
    Labels: unknown;
    Role: "worker" | "manager";
    Availability: "active" | "pause" | "drain";
  }>;
  export type Platform = Partial<{ Architecture: string; OS: string }>;
  export type EngineDescription = Partial<{
    EngineVersion: string;
    Labels: unknown;
    Plugins: Array<Partial<{ Type: string; Name: string }>>;
  }>;
  export type TLSInfo = Partial<{ TrustRoot: string; CertIssuerSubject: string; CertIssuerPublicKey: string }>;
  export type NodeDescription = Partial<{
    Hostname: string;
    Platform: Platform;
    Resources: ResourceObject;
    Engine: EngineDescription;
    TLSInfo: TLSInfo;
  }>;
  export type NodeState = "unknown" | "down" | "ready" | "disconnected";
  export type NodeStatus = Partial<{ State: NodeState; Message: string; Addr: string }>;
  export type Reachability = "unknown" | "unreachable" | "reachable";
  export type ManagerStatus = Partial<{ Leader: boolean; Reachability: Reachability; Addr: string }> | null;
  export type Node = Partial<{
    ID: string;
    Version: ObjectVersion;
    CreatedAt: string;
    UpdatedAt: string;
    Spec: NodeSpec;
    Description: NodeDescription;
    Status: NodeStatus;
    ManagerStatus: ManagerStatus;
  }>;
  export type SwarmSpec = Partial<{
    Name: string;
    Labels: unknown;
    Orchestration: Partial<{ TaskHistoryRetentionLimit: number }> | null;
    Raft: Partial<{
      SnapshotInterval: number;
      KeepOldSnapshots: number;
      LogEntriesForSlowFollowers: number;
      ElectionTick: number;
      HeartbeatTick: number;
    }>;
    Dispatcher: Partial<{ HeartbeatPeriod: number }> | null;
    CAConfig: Partial<{
      NodeCertExpiry: number;
      ExternalCAs: Array<Partial<{ Protocol: "cfssl"; URL: string; Options: unknown; CACert: string }>>;
      SigningCACert: string;
      SigningCAKey: string;
      ForceRotate: number;
    }> | null;
    EncryptionConfig: Partial<{ AutoLockManagers: boolean }>;
    TaskDefaults: Partial<{ LogDriver: Partial<{ Name: string; Options: unknown }> }>;
  }>;
  export type ClusterInfo = Partial<{
    ID: string;
    Version: ObjectVersion;
    CreatedAt: string;
    UpdatedAt: string;
    Spec: SwarmSpec;
    TLSInfo: TLSInfo;
    RootRotationInProgress: boolean;
    DataPathPort: number;
    DefaultAddrPool: Array<string>;
    SubnetSize: number;
  }> | null;
  export type JoinTokens = Partial<{ Worker: string; Manager: string }>;
  export type Swarm = ClusterInfo & Partial<{ JoinTokens: JoinTokens }>;
  export type NetworkAttachmentConfig = Partial<{ Target: string; Aliases: Array<string>; DriverOpts: unknown }>;
  export type TaskSpec = Partial<{
    PluginSpec: Partial<{ Name: string; Remote: string; Disabled: boolean; PluginPrivilege: Array<PluginPrivilege> }>;
    ContainerSpec: Partial<{
      Image: string;
      Labels: unknown;
      Command: Array<string>;
      Args: Array<string>;
      Hostname: string;
      Env: Array<string>;
      Dir: string;
      User: string;
      Groups: Array<string>;
      Privileges: Partial<{
        CredentialSpec: Partial<{ Config: string; File: string; Registry: string }>;
        SELinuxContext: Partial<{ Disable: boolean; User: string; Role: string; Type: string; Level: string }>;
      }>;
      TTY: boolean;
      OpenStdin: boolean;
      ReadOnly: boolean;
      Mounts: Array<Mount>;
      StopSignal: string;
      StopGracePeriod: number;
      HealthCheck: HealthConfig;
      Hosts: Array<string>;
      DNSConfig: Partial<{ Nameservers: Array<string>; Search: Array<string>; Options: Array<string> }>;
      Secrets: Array<
        Partial<{
          File: Partial<{ Name: string; UID: string; GID: string; Mode: number }>;
          SecretID: string;
          SecretName: string;
        }>
      >;
      Configs: Array<
        Partial<{
          File: Partial<{ Name: string; UID: string; GID: string; Mode: number }>;
          Runtime: Partial<{}>;
          ConfigID: string;
          ConfigName: string;
        }>
      >;
      Isolation: "default" | "process" | "hyperv";
      Init: boolean | null;
      Sysctls: unknown;
      CapabilityAdd: Array<string>;
      CapabilityDrop: Array<string>;
      Ulimits: Array<Partial<{ Name: string; Soft: number; Hard: number }>>;
    }>;
    NetworkAttachmentSpec: Partial<{ ContainerID: string }>;
    Resources: Partial<{ Limits: Limit; Reservations: ResourceObject }>;
    RestartPolicy: Partial<{
      Condition: "none" | "on-failure" | "any";
      Delay: number;
      MaxAttempts: number;
      Window: number;
    }>;
    Placement: Partial<{
      Constraints: Array<string>;
      Preferences: Array<Partial<{ Spread: Partial<{ SpreadDescriptor: string }> }>>;
      MaxReplicas: number;
      Platforms: Array<Platform>;
    }>;
    ForceUpdate: number;
    Runtime: string;
    Networks: Array<NetworkAttachmentConfig>;
    LogDriver: Partial<{ Name: string; Options: unknown }>;
  }>;
  export type TaskState =
    | "new"
    | "allocated"
    | "pending"
    | "assigned"
    | "accepted"
    | "preparing"
    | "ready"
    | "starting"
    | "running"
    | "complete"
    | "shutdown"
    | "failed"
    | "rejected"
    | "remove"
    | "orphaned";
  export type Task = Partial<{
    ID: string;
    Version: ObjectVersion;
    CreatedAt: string;
    UpdatedAt: string;
    Name: string;
    Labels: unknown;
    Spec: TaskSpec;
    ServiceID: string;
    Slot: number;
    NodeID: string;
    AssignedGenericResources: GenericResources;
    Status: Partial<{
      Timestamp: string;
      State: TaskState;
      Message: string;
      Err: string;
      ContainerStatus: Partial<{ ContainerID: string; PID: number; ExitCode: number }>;
    }>;
    DesiredState: TaskState;
    JobIteration: ObjectVersion;
  }>;
  export type EndpointPortConfig = Partial<{
    Name: string;
    Protocol: "tcp" | "udp" | "sctp";
    TargetPort: number;
    PublishedPort: number;
    PublishMode: "ingress" | "host";
  }>;
  export type EndpointSpec = Partial<{ Mode: "vip" | "dnsrr"; Ports: Array<EndpointPortConfig> }>;
  export type ServiceSpec = Partial<{
    Name: string;
    Labels: unknown;
    TaskTemplate: TaskSpec;
    Mode: Partial<{
      Replicated: Partial<{ Replicas: number }>;
      Global: Partial<{}>;
      ReplicatedJob: Partial<{ MaxConcurrent: number; TotalCompletions: number }>;
      GlobalJob: Partial<{}>;
    }>;
    UpdateConfig: Partial<{
      Parallelism: number;
      Delay: number;
      FailureAction: "continue" | "pause" | "rollback";
      Monitor: number;
      MaxFailureRatio: number;
      Order: "stop-first" | "start-first";
    }>;
    RollbackConfig: Partial<{
      Parallelism: number;
      Delay: number;
      FailureAction: "continue" | "pause";
      Monitor: number;
      MaxFailureRatio: number;
      Order: "stop-first" | "start-first";
    }>;
    Networks: Array<NetworkAttachmentConfig>;
    EndpointSpec: EndpointSpec;
  }>;
  export type Service = Partial<{
    ID: string;
    Version: ObjectVersion;
    CreatedAt: string;
    UpdatedAt: string;
    Spec: ServiceSpec;
    Endpoint: Partial<{
      Spec: EndpointSpec;
      Ports: Array<EndpointPortConfig>;
      VirtualIPs: Array<Partial<{ NetworkID: string; Addr: string }>>;
    }>;
    UpdateStatus: Partial<{
      State: "updating" | "paused" | "completed";
      StartedAt: string;
      CompletedAt: string;
      Message: string;
    }>;
    ServiceStatus: Partial<{ RunningTasks: number; DesiredTasks: number; CompletedTasks: number }>;
    JobStatus: Partial<{ JobIteration: ObjectVersion; LastExecution: string }>;
  }>;
  export type ImageDeleteResponseItem = Partial<{ Untagged: string; Deleted: string }>;
  export type ServiceUpdateResponse = Partial<{ Warnings: Array<string> }>;
  export type ContainerSummary = Partial<{
    Id: string;
    Names: Array<string>;
    Image: string;
    ImageID: string;
    Command: string;
    Created: number;
    Ports: Array<Port>;
    SizeRw: number;
    SizeRootFs: number;
    Labels: unknown;
    State: string;
    Status: string;
    HostConfig: Partial<{ NetworkMode: string }>;
    NetworkSettings: Partial<{ Networks: unknown }>;
    Mounts: Array<MountPoint>;
  }>;
  export type Driver = { Name: string; Options?: unknown | undefined };
  export type SecretSpec = Partial<{ Name: string; Labels: unknown; Data: string; Driver: Driver; Templating: Driver }>;
  export type Secret = Partial<{
    ID: string;
    Version: ObjectVersion;
    CreatedAt: string;
    UpdatedAt: string;
    Spec: SecretSpec;
  }>;
  export type ConfigSpec = Partial<{ Name: string; Labels: unknown; Data: string; Templating: Driver }>;
  export type Config = Partial<{
    ID: string;
    Version: ObjectVersion;
    CreatedAt: string;
    UpdatedAt: string;
    Spec: ConfigSpec;
  }>;
  export type ContainerState = Partial<{
    Status: "created" | "running" | "paused" | "restarting" | "removing" | "exited" | "dead";
    Running: boolean;
    Paused: boolean;
    Restarting: boolean;
    OOMKilled: boolean;
    Dead: boolean;
    Pid: number;
    ExitCode: number;
    Error: string;
    StartedAt: string;
    FinishedAt: string;
    Health: Health;
  }> | null;
  export type ContainerCreateResponse = { Id: string; Warnings: Array<string> };
  export type ContainerWaitExitError = Partial<{ Message: string }>;
  export type ContainerWaitResponse = { StatusCode: number; Error?: ContainerWaitExitError | undefined };
  export type SystemVersion = Partial<{
    Platform: { Name: string };
    Components: Array<{ Name: string; Version: string; Details?: Partial<{}> | null | undefined }>;
    Version: string;
    ApiVersion: string;
    MinAPIVersion: string;
    GitCommit: string;
    GoVersion: string;
    Os: string;
    Arch: string;
    KernelVersion: string;
    Experimental: boolean;
    BuildTime: string;
  }>;
  export type PluginsInfo = Partial<{
    Volume: Array<string>;
    Network: Array<string>;
    Authorization: Array<string>;
    Log: Array<string>;
  }>;
  export type IndexInfo = Partial<{ Name: string; Mirrors: Array<string>; Secure: boolean; Official: boolean }> | null;
  export type RegistryServiceConfig = Partial<{
    AllowNondistributableArtifactsCIDRs: Array<string>;
    AllowNondistributableArtifactsHostnames: Array<string>;
    InsecureRegistryCIDRs: Array<string>;
    IndexConfigs: unknown;
    Mirrors: Array<string>;
  }> | null;
  export type Runtime = Partial<{ path: string; runtimeArgs: Array<string> | null }>;
  export type LocalNodeState = "" | "inactive" | "pending" | "active" | "error" | "locked";
  export type PeerNode = Partial<{ NodeID: string; Addr: string }>;
  export type SwarmInfo = Partial<{
    NodeID: string;
    NodeAddr: string;
    LocalNodeState: LocalNodeState;
    ControlAvailable: boolean;
    Error: string;
    RemoteManagers: Array<PeerNode> | null;
    Nodes: number | null;
    Managers: number | null;
    Cluster: ClusterInfo;
  }>;
  export type Commit = Partial<{ ID: string; Expected: string }>;
  export type SystemInfo = Partial<{
    ID: string;
    Containers: number;
    ContainersRunning: number;
    ContainersPaused: number;
    ContainersStopped: number;
    Images: number;
    Driver: string;
    DriverStatus: Array<Array<string>>;
    DockerRootDir: string;
    Plugins: PluginsInfo;
    MemoryLimit: boolean;
    SwapLimit: boolean;
    KernelMemoryTCP: boolean;
    CpuCfsPeriod: boolean;
    CpuCfsQuota: boolean;
    CPUShares: boolean;
    CPUSet: boolean;
    PidsLimit: boolean;
    OomKillDisable: boolean;
    IPv4Forwarding: boolean;
    BridgeNfIptables: boolean;
    BridgeNfIp6tables: boolean;
    Debug: boolean;
    NFd: number;
    NGoroutines: number;
    SystemTime: string;
    LoggingDriver: string;
    CgroupDriver: "cgroupfs" | "systemd" | "none";
    CgroupVersion: "1" | "2";
    NEventsListener: number;
    KernelVersion: string;
    OperatingSystem: string;
    OSVersion: string;
    OSType: string;
    Architecture: string;
    NCPU: number;
    MemTotal: number;
    IndexServerAddress: string;
    RegistryConfig: RegistryServiceConfig;
    GenericResources: GenericResources;
    HttpProxy: string;
    HttpsProxy: string;
    NoProxy: string;
    Name: string;
    Labels: Array<string>;
    ExperimentalBuild: boolean;
    ServerVersion: string;
    Runtimes: unknown;
    DefaultRuntime: string;
    Swarm: SwarmInfo;
    LiveRestoreEnabled: boolean;
    Isolation: "default" | "hyperv" | "process";
    InitBinary: string;
    ContainerdCommit: Commit;
    RuncCommit: Commit;
    InitCommit: Commit;
    SecurityOptions: Array<string>;
    ProductLicense: string;
    DefaultAddressPools: Array<Partial<{ Base: string; Size: number }>>;
    Warnings: Array<string>;
  }>;
  export type EventActor = Partial<{ ID: string; Attributes: unknown }>;
  export type EventMessage = Partial<{
    Type:
      | "builder"
      | "config"
      | "container"
      | "daemon"
      | "image"
      | "network"
      | "node"
      | "plugin"
      | "secret"
      | "service"
      | "volume";
    Action: string;
    Actor: EventActor;
    scope: "local" | "swarm";
    time: number;
    timeNano: number;
  }>;
  export type OCIDescriptor = Partial<{ mediaType: string; digest: string; size: number }>;
  export type OCIPlatform = Partial<{
    architecture: string;
    os: string;
    "os.version": string;
    "os.features": Array<string>;
    variant: string;
  }>;
  export type DistributionInspect = { Descriptor: OCIDescriptor; Platforms: Array<OCIPlatform> };

  // </Schemas>
}

export namespace Endpoints {
  // <Endpoints>

  export type get_ContainerList = {
    method: "GET";
    path: "/containers/json";
    parameters: {
      query: Partial<{ all: boolean; limit: number; size: boolean; filters: string }>;
    };
    response: Array<Schemas.ContainerSummary>;
  };
  export type post_ContainerCreate = {
    method: "POST";
    path: "/containers/create";
    parameters: {
      query: Partial<{ name: string; platform: string }>;

      body: Schemas.ContainerConfig &
        Partial<{ HostConfig: Schemas.HostConfig; NetworkingConfig: Schemas.NetworkingConfig }>;
    };
    response: Schemas.ContainerCreateResponse;
  };
  export type get_ContainerInspect = {
    method: "GET";
    path: "/containers/{id}/json";
    parameters: {
      query: Partial<{ size: boolean }>;
      path: { id: string };
    };
    response: Partial<{
      Id: string;
      Created: string;
      Path: string;
      Args: Array<string>;
      State: Schemas.ContainerState;
      Image: string;
      ResolvConfPath: string;
      HostnamePath: string;
      HostsPath: string;
      LogPath: string;
      Name: string;
      RestartCount: number;
      Driver: string;
      Platform: string;
      MountLabel: string;
      ProcessLabel: string;
      AppArmorProfile: string;
      ExecIDs: Array<string> | Schemas.null;
      HostConfig: Schemas.HostConfig;
      GraphDriver: Schemas.GraphDriverData;
      SizeRw: number;
      SizeRootFs: number;
      Mounts: Array<Schemas.MountPoint>;
      Config: Schemas.ContainerConfig;
      NetworkSettings: Schemas.NetworkSettings;
    }>;
  };
  export type get_ContainerTop = {
    method: "GET";
    path: "/containers/{id}/top";
    parameters: {
      query: Partial<{ ps_args: string }>;
      path: { id: string };
    };
    response: Partial<{ Titles: Array<string>; Processes: Array<Array<string>> }>;
  };
  export type get_ContainerLogs = {
    method: "GET";
    path: "/containers/{id}/logs";
    parameters: {
      query: Partial<{
        follow: boolean;
        stdout: boolean;
        stderr: boolean;
        since: number;
        until: number;
        timestamps: boolean;
        tail: string;
      }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type get_ContainerChanges = {
    method: "GET";
    path: "/containers/{id}/changes";
    parameters: {
      path: { id: string };
    };
    response: Array<Schemas.FilesystemChange>;
  };
  export type get_ContainerExport = {
    method: "GET";
    path: "/containers/{id}/export";
    parameters: {
      path: { id: string };
    };
    response: unknown;
  };
  export type get_ContainerStats = {
    method: "GET";
    path: "/containers/{id}/stats";
    parameters: {
      query: Partial<{ stream: boolean; "one-shot": boolean }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ContainerResize = {
    method: "POST";
    path: "/containers/{id}/resize";
    parameters: {
      query: Partial<{ h: number; w: number }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ContainerStart = {
    method: "POST";
    path: "/containers/{id}/start";
    parameters: {
      query: Partial<{ detachKeys: string }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ContainerStop = {
    method: "POST";
    path: "/containers/{id}/stop";
    parameters: {
      query: Partial<{ signal: string; t: number }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ContainerRestart = {
    method: "POST";
    path: "/containers/{id}/restart";
    parameters: {
      query: Partial<{ signal: string; t: number }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ContainerKill = {
    method: "POST";
    path: "/containers/{id}/kill";
    parameters: {
      query: Partial<{ signal: string }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ContainerUpdate = {
    method: "POST";
    path: "/containers/{id}/update";
    parameters: {
      path: { id: string };

      body: Schemas.Resources & Partial<{ RestartPolicy: Schemas.RestartPolicy }>;
    };
    response: Partial<{ Warnings: Array<string> }>;
  };
  export type post_ContainerRename = {
    method: "POST";
    path: "/containers/{id}/rename";
    parameters: {
      query: { name: string };
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ContainerPause = {
    method: "POST";
    path: "/containers/{id}/pause";
    parameters: {
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ContainerUnpause = {
    method: "POST";
    path: "/containers/{id}/unpause";
    parameters: {
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ContainerAttach = {
    method: "POST";
    path: "/containers/{id}/attach";
    parameters: {
      query: Partial<{
        detachKeys: string;
        logs: boolean;
        stream: boolean;
        stdin: boolean;
        stdout: boolean;
        stderr: boolean;
      }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type get_ContainerAttachWebsocket = {
    method: "GET";
    path: "/containers/{id}/attach/ws";
    parameters: {
      query: Partial<{
        detachKeys: string;
        logs: boolean;
        stream: boolean;
        stdin: boolean;
        stdout: boolean;
        stderr: boolean;
      }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ContainerWait = {
    method: "POST";
    path: "/containers/{id}/wait";
    parameters: {
      query: Partial<{ condition: "not-running" | "next-exit" | "removed" }>;
      path: { id: string };
    };
    response: Schemas.ContainerWaitResponse;
  };
  export type delete_ContainerDelete = {
    method: "DELETE";
    path: "/containers/{id}";
    parameters: {
      query: Partial<{ v: boolean; force: boolean; link: boolean }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type get_ContainerArchive = {
    method: "GET";
    path: "/containers/{id}/archive";
    parameters: {
      query: { path: string };
      path: { id: string };
    };
    response: unknown;
  };
  export type put_PutContainerArchive = {
    method: "PUT";
    path: "/containers/{id}/archive";
    parameters: {
      query: { path: string; noOverwriteDirNonDir: string; copyUIDGID: string };
      path: { id: string };

      body: string;
    };
    response: unknown;
  };
  export type head_ContainerArchiveInfo = {
    method: "HEAD";
    path: "/containers/{id}/archive";
    parameters: {
      query: { path: string };
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ContainerPrune = {
    method: "POST";
    path: "/containers/prune";
    parameters: {
      query: Partial<{ filters: string }>;
    };
    response: Partial<{ ContainersDeleted: Array<string>; SpaceReclaimed: number }>;
  };
  export type get_ImageList = {
    method: "GET";
    path: "/images/json";
    parameters: {
      query: Partial<{ all: boolean; filters: string; "shared-size": boolean; digests: boolean }>;
    };
    response: Array<Schemas.ImageSummary>;
  };
  export type post_ImageBuild = {
    method: "POST";
    path: "/build";
    parameters: {
      query: Partial<{
        dockerfile: string;
        t: string;
        extrahosts: string;
        remote: string;
        q: boolean;
        nocache: boolean;
        cachefrom: string;
        pull: string;
        rm: boolean;
        forcerm: boolean;
        memory: number;
        memswap: number;
        cpushares: number;
        cpusetcpus: string;
        cpuperiod: number;
        cpuquota: number;
        buildargs: string;
        shmsize: number;
        squash: boolean;
        labels: string;
        networkmode: string;
        platform: string;
        target: string;
        outputs: string;
      }>;

      header: Partial<{ "Content-type": "application/x-tar"; "X-Registry-Config": string }>;
      body: string;
    };
    response: unknown;
  };
  export type post_BuildPrune = {
    method: "POST";
    path: "/build/prune";
    parameters: {
      query: Partial<{ "keep-storage": number; all: boolean; filters: string }>;
    };
    response: Partial<{ CachesDeleted: Array<string>; SpaceReclaimed: number }>;
  };
  export type post_ImageCreate = {
    method: "POST";
    path: "/images/create";
    parameters: {
      query: Partial<{
        fromImage: string;
        fromSrc: string;
        repo: string;
        tag: string;
        message: string;
        changes: Array<string>;
        platform: string;
      }>;

      header: Partial<{ "X-Registry-Auth": string }>;
      body: string;
    };
    response: unknown;
  };
  export type get_ImageInspect = {
    method: "GET";
    path: "/images/{name}/json";
    parameters: {
      path: { name: string };
    };
    response: Schemas.ImageInspect;
  };
  export type get_ImageHistory = {
    method: "GET";
    path: "/images/{name}/history";
    parameters: {
      path: { name: string };
    };
    response: Array<{
      Id: string;
      Created: number;
      CreatedBy: string;
      Tags: Array<string>;
      Size: number;
      Comment: string;
    }>;
  };
  export type post_ImagePush = {
    method: "POST";
    path: "/images/{name}/push";
    parameters: {
      query: Partial<{ tag: string }>;
      path: { name: string };
      header: { "X-Registry-Auth": string };
    };
    response: unknown;
  };
  export type post_ImageTag = {
    method: "POST";
    path: "/images/{name}/tag";
    parameters: {
      query: Partial<{ repo: string; tag: string }>;
      path: { name: string };
    };
    response: unknown;
  };
  export type delete_ImageDelete = {
    method: "DELETE";
    path: "/images/{name}";
    parameters: {
      query: Partial<{ force: boolean; noprune: boolean }>;
      path: { name: string };
    };
    response: Array<Schemas.ImageDeleteResponseItem>;
  };
  export type get_ImageSearch = {
    method: "GET";
    path: "/images/search";
    parameters: {
      query: { term: string; limit: number; filters: string };
    };
    response: Array<
      Partial<{ description: string; is_official: boolean; is_automated: boolean; name: string; star_count: number }>
    >;
  };
  export type post_ImagePrune = {
    method: "POST";
    path: "/images/prune";
    parameters: {
      query: Partial<{ filters: string }>;
    };
    response: Partial<{ ImagesDeleted: Array<Schemas.ImageDeleteResponseItem>; SpaceReclaimed: number }>;
  };
  export type post_SystemAuth = {
    method: "POST";
    path: "/auth";
    parameters: {
      body: Schemas.AuthConfig;
    };
    response: unknown;
  };
  export type get_SystemInfo = {
    method: "GET";
    path: "/info";
    parameters: never;
    response: Schemas.SystemInfo;
  };
  export type get_SystemVersion = {
    method: "GET";
    path: "/version";
    parameters: never;
    response: Schemas.SystemVersion;
  };
  export type get_SystemPing = {
    method: "GET";
    path: "/_ping";
    parameters: never;
    response: unknown;
  };
  export type head_SystemPingHead = {
    method: "HEAD";
    path: "/_ping";
    parameters: never;
    response: unknown;
  };
  export type post_ImageCommit = {
    method: "POST";
    path: "/commit";
    parameters: {
      query: Partial<{
        container: string;
        repo: string;
        tag: string;
        comment: string;
        author: string;
        pause: boolean;
        changes: string;
      }>;

      body: Schemas.ContainerConfig;
    };
    response: Schemas.IdResponse;
  };
  export type get_SystemEvents = {
    method: "GET";
    path: "/events";
    parameters: {
      query: Partial<{ since: string; until: string; filters: string }>;
    };
    response: Schemas.EventMessage;
  };
  export type get_SystemDataUsage = {
    method: "GET";
    path: "/system/df";
    parameters: {
      query: Partial<{ type: Array<"container" | "image" | "volume" | "build-cache"> }>;
    };
    response: Partial<{
      LayersSize: number;
      Images: Array<Schemas.ImageSummary>;
      Containers: Array<Schemas.ContainerSummary>;
      Volumes: Array<Schemas.Volume>;
      BuildCache: Array<Schemas.BuildCache>;
    }>;
  };
  export type get_ImageGet = {
    method: "GET";
    path: "/images/{name}/get";
    parameters: {
      path: { name: string };
    };
    response: unknown;
  };
  export type get_ImageGetAll = {
    method: "GET";
    path: "/images/get";
    parameters: {
      query: Partial<{ names: Array<string> }>;
    };
    response: unknown;
  };
  export type post_ImageLoad = {
    method: "POST";
    path: "/images/load";
    parameters: {
      query: Partial<{ quiet: boolean }>;
    };
    response: unknown;
  };
  export type post_ContainerExec = {
    method: "POST";
    path: "/containers/{id}/exec";
    parameters: {
      path: { id: string };

      body: Partial<{
        AttachStdin: boolean;
        AttachStdout: boolean;
        AttachStderr: boolean;
        ConsoleSize: Array<number> | Schemas.null;
        DetachKeys: string;
        Tty: boolean;
        Env: Array<string>;
        Cmd: Array<string>;
        Privileged: boolean;
        User: string;
        WorkingDir: string;
      }>;
    };
    response: Schemas.IdResponse;
  };
  export type post_ExecStart = {
    method: "POST";
    path: "/exec/{id}/start";
    parameters: {
      path: { id: string };

      body: Partial<{ Detach: boolean; Tty: boolean; ConsoleSize: Array<number> | Schemas.null }>;
    };
    response: unknown;
  };
  export type post_ExecResize = {
    method: "POST";
    path: "/exec/{id}/resize";
    parameters: {
      query: Partial<{ h: number; w: number }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type get_ExecInspect = {
    method: "GET";
    path: "/exec/{id}/json";
    parameters: {
      path: { id: string };
    };
    response: Partial<{
      CanRemove: boolean;
      DetachKeys: string;
      ID: string;
      Running: boolean;
      ExitCode: number;
      ProcessConfig: Schemas.ProcessConfig;
      OpenStdin: boolean;
      OpenStderr: boolean;
      OpenStdout: boolean;
      ContainerID: string;
      Pid: number;
    }>;
  };
  export type get_VolumeList = {
    method: "GET";
    path: "/volumes";
    parameters: {
      query: Partial<{ filters: string }>;
    };
    response: Schemas.VolumeListResponse;
  };
  export type post_VolumeCreate = {
    method: "POST";
    path: "/volumes/create";
    parameters: {
      body: Schemas.VolumeCreateOptions;
    };
    response: Schemas.Volume;
  };
  export type get_VolumeInspect = {
    method: "GET";
    path: "/volumes/{name}";
    parameters: {
      path: { name: string };
    };
    response: Schemas.Volume;
  };
  export type put_VolumeUpdate = {
    method: "PUT";
    path: "/volumes/{name}";
    parameters: {
      query: { version: number };
      path: { name: string };

      body: Partial<{ Spec: Schemas.ClusterVolumeSpec }>;
    };
    response: unknown;
  };
  export type delete_VolumeDelete = {
    method: "DELETE";
    path: "/volumes/{name}";
    parameters: {
      query: Partial<{ force: boolean }>;
      path: { name: string };
    };
    response: unknown;
  };
  export type post_VolumePrune = {
    method: "POST";
    path: "/volumes/prune";
    parameters: {
      query: Partial<{ filters: string }>;
    };
    response: Partial<{ VolumesDeleted: Array<string>; SpaceReclaimed: number }>;
  };
  export type get_NetworkList = {
    method: "GET";
    path: "/networks";
    parameters: {
      query: Partial<{ filters: string }>;
    };
    response: Array<Schemas.Network>;
  };
  export type get_NetworkInspect = {
    method: "GET";
    path: "/networks/{id}";
    parameters: {
      query: Partial<{ verbose: boolean; scope: string }>;
      path: { id: string };
    };
    response: Schemas.Network;
  };
  export type delete_NetworkDelete = {
    method: "DELETE";
    path: "/networks/{id}";
    parameters: {
      path: { id: string };
    };
    response: unknown;
  };
  export type post_NetworkCreate = {
    method: "POST";
    path: "/networks/create";
    parameters: {
      body: {
        Name: string;
        CheckDuplicate?: boolean | undefined;
        Driver?: string | undefined;
        Internal?: boolean | undefined;
        Attachable?: boolean | undefined;
        Ingress?: boolean | undefined;
        IPAM?: Schemas.IPAM | undefined;
        EnableIPv6?: boolean | undefined;
        Options?: unknown | undefined;
        Labels?: unknown | undefined;
      };
    };
    response: Partial<{ Id: string; Warning: string }>;
  };
  export type post_NetworkConnect = {
    method: "POST";
    path: "/networks/{id}/connect";
    parameters: {
      path: { id: string };

      body: Partial<{ Container: string; EndpointConfig: Schemas.EndpointSettings }>;
    };
    response: unknown;
  };
  export type post_NetworkDisconnect = {
    method: "POST";
    path: "/networks/{id}/disconnect";
    parameters: {
      path: { id: string };

      body: Partial<{ Container: string; Force: boolean }>;
    };
    response: unknown;
  };
  export type post_NetworkPrune = {
    method: "POST";
    path: "/networks/prune";
    parameters: {
      query: Partial<{ filters: string }>;
    };
    response: Partial<{ NetworksDeleted: Array<string> }>;
  };
  export type get_PluginList = {
    method: "GET";
    path: "/plugins";
    parameters: {
      query: Partial<{ filters: string }>;
    };
    response: Array<Schemas.Plugin>;
  };
  export type get_GetPluginPrivileges = {
    method: "GET";
    path: "/plugins/privileges";
    parameters: {
      query: { remote: string };
    };
    response: Array<Schemas.PluginPrivilege>;
  };
  export type post_PluginPull = {
    method: "POST";
    path: "/plugins/pull";
    parameters: {
      query: { remote: string; name: string };

      header: Partial<{ "X-Registry-Auth": string }>;
      body: Array<Schemas.PluginPrivilege>;
    };
    response: unknown;
  };
  export type get_PluginInspect = {
    method: "GET";
    path: "/plugins/{name}/json";
    parameters: {
      path: { name: string };
    };
    response: Schemas.Plugin;
  };
  export type delete_PluginDelete = {
    method: "DELETE";
    path: "/plugins/{name}";
    parameters: {
      query: Partial<{ force: boolean }>;
      path: { name: string };
    };
    response: Schemas.Plugin;
  };
  export type post_PluginEnable = {
    method: "POST";
    path: "/plugins/{name}/enable";
    parameters: {
      query: Partial<{ timeout: number }>;
      path: { name: string };
    };
    response: unknown;
  };
  export type post_PluginDisable = {
    method: "POST";
    path: "/plugins/{name}/disable";
    parameters: {
      query: Partial<{ force: boolean }>;
      path: { name: string };
    };
    response: unknown;
  };
  export type post_PluginUpgrade = {
    method: "POST";
    path: "/plugins/{name}/upgrade";
    parameters: {
      query: { remote: string };
      path: { name: string };
      header: Partial<{ "X-Registry-Auth": string }>;
      body: Array<Schemas.PluginPrivilege>;
    };
    response: unknown;
  };
  export type post_PluginCreate = {
    method: "POST";
    path: "/plugins/create";
    parameters: {
      query: { name: string };
    };
    response: unknown;
  };
  export type post_PluginPush = {
    method: "POST";
    path: "/plugins/{name}/push";
    parameters: {
      path: { name: string };
    };
    response: unknown;
  };
  export type post_PluginSet = {
    method: "POST";
    path: "/plugins/{name}/set";
    parameters: {
      path: { name: string };

      body: Array<string>;
    };
    response: unknown;
  };
  export type get_NodeList = {
    method: "GET";
    path: "/nodes";
    parameters: {
      query: Partial<{ filters: string }>;
    };
    response: Array<Schemas.Node>;
  };
  export type get_NodeInspect = {
    method: "GET";
    path: "/nodes/{id}";
    parameters: {
      path: { id: string };
    };
    response: Schemas.Node;
  };
  export type delete_NodeDelete = {
    method: "DELETE";
    path: "/nodes/{id}";
    parameters: {
      query: Partial<{ force: boolean }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type post_NodeUpdate = {
    method: "POST";
    path: "/nodes/{id}/update";
    parameters: {
      query: { version: number };
      path: { id: string };

      body: Schemas.NodeSpec;
    };
    response: unknown;
  };
  export type get_SwarmInspect = {
    method: "GET";
    path: "/swarm";
    parameters: never;
    response: Schemas.Swarm;
  };
  export type post_SwarmInit = {
    method: "POST";
    path: "/swarm/init";
    parameters: {
      body: Partial<{
        ListenAddr: string;
        AdvertiseAddr: string;
        DataPathAddr: string;
        DataPathPort: number;
        DefaultAddrPool: Array<string>;
        ForceNewCluster: boolean;
        SubnetSize: number;
        Spec: Schemas.SwarmSpec;
      }>;
    };
    response: string;
  };
  export type post_SwarmJoin = {
    method: "POST";
    path: "/swarm/join";
    parameters: {
      body: Partial<{
        ListenAddr: string;
        AdvertiseAddr: string;
        DataPathAddr: string;
        RemoteAddrs: Array<string>;
        JoinToken: string;
      }>;
    };
    response: unknown;
  };
  export type post_SwarmLeave = {
    method: "POST";
    path: "/swarm/leave";
    parameters: {
      query: Partial<{ force: boolean }>;
    };
    response: unknown;
  };
  export type post_SwarmUpdate = {
    method: "POST";
    path: "/swarm/update";
    parameters: {
      query: {
        version: number;
        rotateWorkerToken: boolean;
        rotateManagerToken: boolean;
        rotateManagerUnlockKey: boolean;
      };

      body: Schemas.SwarmSpec;
    };
    response: unknown;
  };
  export type get_SwarmUnlockkey = {
    method: "GET";
    path: "/swarm/unlockkey";
    parameters: never;
    response: Partial<{ UnlockKey: string }>;
  };
  export type post_SwarmUnlock = {
    method: "POST";
    path: "/swarm/unlock";
    parameters: {
      body: Partial<{ UnlockKey: string }>;
    };
    response: unknown;
  };
  export type get_ServiceList = {
    method: "GET";
    path: "/services";
    parameters: {
      query: Partial<{ filters: string; status: boolean }>;
    };
    response: Array<Schemas.Service>;
  };
  export type post_ServiceCreate = {
    method: "POST";
    path: "/services/create";
    parameters: {
      header: Partial<{ "X-Registry-Auth": string }>;
      body: Schemas.ServiceSpec & unknown;
    };
    response: Partial<{ ID: string; Warning: string }>;
  };
  export type get_ServiceInspect = {
    method: "GET";
    path: "/services/{id}";
    parameters: {
      query: Partial<{ insertDefaults: boolean }>;
      path: { id: string };
    };
    response: Schemas.Service;
  };
  export type delete_ServiceDelete = {
    method: "DELETE";
    path: "/services/{id}";
    parameters: {
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ServiceUpdate = {
    method: "POST";
    path: "/services/{id}/update";
    parameters: {
      query: { version: number; registryAuthFrom: "spec" | "previous-spec"; rollback: string };
      path: { id: string };
      header: Partial<{ "X-Registry-Auth": string }>;
      body: Schemas.ServiceSpec & unknown;
    };
    response: Schemas.ServiceUpdateResponse;
  };
  export type get_ServiceLogs = {
    method: "GET";
    path: "/services/{id}/logs";
    parameters: {
      query: Partial<{
        details: boolean;
        follow: boolean;
        stdout: boolean;
        stderr: boolean;
        since: number;
        timestamps: boolean;
        tail: string;
      }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type get_TaskList = {
    method: "GET";
    path: "/tasks";
    parameters: {
      query: Partial<{ filters: string }>;
    };
    response: Array<Schemas.Task>;
  };
  export type get_TaskInspect = {
    method: "GET";
    path: "/tasks/{id}";
    parameters: {
      path: { id: string };
    };
    response: Schemas.Task;
  };
  export type get_TaskLogs = {
    method: "GET";
    path: "/tasks/{id}/logs";
    parameters: {
      query: Partial<{
        details: boolean;
        follow: boolean;
        stdout: boolean;
        stderr: boolean;
        since: number;
        timestamps: boolean;
        tail: string;
      }>;
      path: { id: string };
    };
    response: unknown;
  };
  export type get_SecretList = {
    method: "GET";
    path: "/secrets";
    parameters: {
      query: Partial<{ filters: string }>;
    };
    response: Array<Schemas.Secret>;
  };
  export type post_SecretCreate = {
    method: "POST";
    path: "/secrets/create";
    parameters: {
      body: Schemas.SecretSpec & unknown;
    };
    response: Schemas.IdResponse;
  };
  export type get_SecretInspect = {
    method: "GET";
    path: "/secrets/{id}";
    parameters: {
      path: { id: string };
    };
    response: Schemas.Secret;
  };
  export type delete_SecretDelete = {
    method: "DELETE";
    path: "/secrets/{id}";
    parameters: {
      path: { id: string };
    };
    response: unknown;
  };
  export type post_SecretUpdate = {
    method: "POST";
    path: "/secrets/{id}/update";
    parameters: {
      query: { version: number };
      path: { id: string };

      body: Schemas.SecretSpec;
    };
    response: unknown;
  };
  export type get_ConfigList = {
    method: "GET";
    path: "/configs";
    parameters: {
      query: Partial<{ filters: string }>;
    };
    response: Array<Schemas.Config>;
  };
  export type post_ConfigCreate = {
    method: "POST";
    path: "/configs/create";
    parameters: {
      body: Schemas.ConfigSpec & unknown;
    };
    response: Schemas.IdResponse;
  };
  export type get_ConfigInspect = {
    method: "GET";
    path: "/configs/{id}";
    parameters: {
      path: { id: string };
    };
    response: Schemas.Config;
  };
  export type delete_ConfigDelete = {
    method: "DELETE";
    path: "/configs/{id}";
    parameters: {
      path: { id: string };
    };
    response: unknown;
  };
  export type post_ConfigUpdate = {
    method: "POST";
    path: "/configs/{id}/update";
    parameters: {
      query: { version: number };
      path: { id: string };

      body: Schemas.ConfigSpec;
    };
    response: unknown;
  };
  export type get_DistributionInspect = {
    method: "GET";
    path: "/distribution/{name}/json";
    parameters: {
      path: { name: string };
    };
    response: Schemas.DistributionInspect;
  };
  export type post_Session = {
    method: "POST";
    path: "/session";
    parameters: never;
    response: unknown;
  };

  // </Endpoints>
}

// <EndpointByMethod>
export type EndpointByMethod = {
  get: {
    "/containers/json": Endpoints.get_ContainerList;
    "/containers/{id}/json": Endpoints.get_ContainerInspect;
    "/containers/{id}/top": Endpoints.get_ContainerTop;
    "/containers/{id}/logs": Endpoints.get_ContainerLogs;
    "/containers/{id}/changes": Endpoints.get_ContainerChanges;
    "/containers/{id}/export": Endpoints.get_ContainerExport;
    "/containers/{id}/stats": Endpoints.get_ContainerStats;
    "/containers/{id}/attach/ws": Endpoints.get_ContainerAttachWebsocket;
    "/containers/{id}/archive": Endpoints.get_ContainerArchive;
    "/images/json": Endpoints.get_ImageList;
    "/images/{name}/json": Endpoints.get_ImageInspect;
    "/images/{name}/history": Endpoints.get_ImageHistory;
    "/images/search": Endpoints.get_ImageSearch;
    "/info": Endpoints.get_SystemInfo;
    "/version": Endpoints.get_SystemVersion;
    "/_ping": Endpoints.get_SystemPing;
    "/events": Endpoints.get_SystemEvents;
    "/system/df": Endpoints.get_SystemDataUsage;
    "/images/{name}/get": Endpoints.get_ImageGet;
    "/images/get": Endpoints.get_ImageGetAll;
    "/exec/{id}/json": Endpoints.get_ExecInspect;
    "/volumes": Endpoints.get_VolumeList;
    "/volumes/{name}": Endpoints.get_VolumeInspect;
    "/networks": Endpoints.get_NetworkList;
    "/networks/{id}": Endpoints.get_NetworkInspect;
    "/plugins": Endpoints.get_PluginList;
    "/plugins/privileges": Endpoints.get_GetPluginPrivileges;
    "/plugins/{name}/json": Endpoints.get_PluginInspect;
    "/nodes": Endpoints.get_NodeList;
    "/nodes/{id}": Endpoints.get_NodeInspect;
    "/swarm": Endpoints.get_SwarmInspect;
    "/swarm/unlockkey": Endpoints.get_SwarmUnlockkey;
    "/services": Endpoints.get_ServiceList;
    "/services/{id}": Endpoints.get_ServiceInspect;
    "/services/{id}/logs": Endpoints.get_ServiceLogs;
    "/tasks": Endpoints.get_TaskList;
    "/tasks/{id}": Endpoints.get_TaskInspect;
    "/tasks/{id}/logs": Endpoints.get_TaskLogs;
    "/secrets": Endpoints.get_SecretList;
    "/secrets/{id}": Endpoints.get_SecretInspect;
    "/configs": Endpoints.get_ConfigList;
    "/configs/{id}": Endpoints.get_ConfigInspect;
    "/distribution/{name}/json": Endpoints.get_DistributionInspect;
  };
  post: {
    "/containers/create": Endpoints.post_ContainerCreate;
    "/containers/{id}/resize": Endpoints.post_ContainerResize;
    "/containers/{id}/start": Endpoints.post_ContainerStart;
    "/containers/{id}/stop": Endpoints.post_ContainerStop;
    "/containers/{id}/restart": Endpoints.post_ContainerRestart;
    "/containers/{id}/kill": Endpoints.post_ContainerKill;
    "/containers/{id}/update": Endpoints.post_ContainerUpdate;
    "/containers/{id}/rename": Endpoints.post_ContainerRename;
    "/containers/{id}/pause": Endpoints.post_ContainerPause;
    "/containers/{id}/unpause": Endpoints.post_ContainerUnpause;
    "/containers/{id}/attach": Endpoints.post_ContainerAttach;
    "/containers/{id}/wait": Endpoints.post_ContainerWait;
    "/containers/prune": Endpoints.post_ContainerPrune;
    "/build": Endpoints.post_ImageBuild;
    "/build/prune": Endpoints.post_BuildPrune;
    "/images/create": Endpoints.post_ImageCreate;
    "/images/{name}/push": Endpoints.post_ImagePush;
    "/images/{name}/tag": Endpoints.post_ImageTag;
    "/images/prune": Endpoints.post_ImagePrune;
    "/auth": Endpoints.post_SystemAuth;
    "/commit": Endpoints.post_ImageCommit;
    "/images/load": Endpoints.post_ImageLoad;
    "/containers/{id}/exec": Endpoints.post_ContainerExec;
    "/exec/{id}/start": Endpoints.post_ExecStart;
    "/exec/{id}/resize": Endpoints.post_ExecResize;
    "/volumes/create": Endpoints.post_VolumeCreate;
    "/volumes/prune": Endpoints.post_VolumePrune;
    "/networks/create": Endpoints.post_NetworkCreate;
    "/networks/{id}/connect": Endpoints.post_NetworkConnect;
    "/networks/{id}/disconnect": Endpoints.post_NetworkDisconnect;
    "/networks/prune": Endpoints.post_NetworkPrune;
    "/plugins/pull": Endpoints.post_PluginPull;
    "/plugins/{name}/enable": Endpoints.post_PluginEnable;
    "/plugins/{name}/disable": Endpoints.post_PluginDisable;
    "/plugins/{name}/upgrade": Endpoints.post_PluginUpgrade;
    "/plugins/create": Endpoints.post_PluginCreate;
    "/plugins/{name}/push": Endpoints.post_PluginPush;
    "/plugins/{name}/set": Endpoints.post_PluginSet;
    "/nodes/{id}/update": Endpoints.post_NodeUpdate;
    "/swarm/init": Endpoints.post_SwarmInit;
    "/swarm/join": Endpoints.post_SwarmJoin;
    "/swarm/leave": Endpoints.post_SwarmLeave;
    "/swarm/update": Endpoints.post_SwarmUpdate;
    "/swarm/unlock": Endpoints.post_SwarmUnlock;
    "/services/create": Endpoints.post_ServiceCreate;
    "/services/{id}/update": Endpoints.post_ServiceUpdate;
    "/secrets/create": Endpoints.post_SecretCreate;
    "/secrets/{id}/update": Endpoints.post_SecretUpdate;
    "/configs/create": Endpoints.post_ConfigCreate;
    "/configs/{id}/update": Endpoints.post_ConfigUpdate;
    "/session": Endpoints.post_Session;
  };
  delete: {
    "/containers/{id}": Endpoints.delete_ContainerDelete;
    "/images/{name}": Endpoints.delete_ImageDelete;
    "/volumes/{name}": Endpoints.delete_VolumeDelete;
    "/networks/{id}": Endpoints.delete_NetworkDelete;
    "/plugins/{name}": Endpoints.delete_PluginDelete;
    "/nodes/{id}": Endpoints.delete_NodeDelete;
    "/services/{id}": Endpoints.delete_ServiceDelete;
    "/secrets/{id}": Endpoints.delete_SecretDelete;
    "/configs/{id}": Endpoints.delete_ConfigDelete;
  };
  put: {
    "/containers/{id}/archive": Endpoints.put_PutContainerArchive;
    "/volumes/{name}": Endpoints.put_VolumeUpdate;
  };
  head: {
    "/containers/{id}/archive": Endpoints.head_ContainerArchiveInfo;
    "/_ping": Endpoints.head_SystemPingHead;
  };
};

// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod["get"];
export type PostEndpoints = EndpointByMethod["post"];
export type DeleteEndpoints = EndpointByMethod["delete"];
export type PutEndpoints = EndpointByMethod["put"];
export type HeadEndpoints = EndpointByMethod["head"];
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | MutationMethod;

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig["response"];
};

type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined,
) => Promise<Endpoint["response"]>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["parameters"]>
  ): Promise<TEndpoint["response"]> {
    return this.fetcher("get", this.baseUrl + path, params[0]);
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["parameters"]>
  ): Promise<TEndpoint["response"]> {
    return this.fetcher("post", this.baseUrl + path, params[0]);
  }
  // </ApiClient.post>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["parameters"]>
  ): Promise<TEndpoint["response"]> {
    return this.fetcher("delete", this.baseUrl + path, params[0]);
  }
  // </ApiClient.delete>

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["parameters"]>
  ): Promise<TEndpoint["response"]> {
    return this.fetcher("put", this.baseUrl + path, params[0]);
  }
  // </ApiClient.put>

  // <ApiClient.head>
  head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<TEndpoint["parameters"]>
  ): Promise<TEndpoint["response"]> {
    return this.fetcher("head", this.baseUrl + path, params[0]);
  }
  // </ApiClient.head>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "");
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
