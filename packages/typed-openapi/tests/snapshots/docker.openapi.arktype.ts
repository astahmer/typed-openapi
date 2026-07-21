
  import { type } from "arktype";

// <Schemas>
export const Port = type({ "IP?": type("string"), PrivatePort: type("number.integer"), "PublicPort?": type("number.integer"), Type: type.enumerated("tcp", "udp", "sctp") });
export type Port = typeof Port.infer;

export const MountPoint = type({ Type: type.enumerated("bind", "volume", "tmpfs", "npipe", "cluster"), Name: type("string"), Source: type("string"), Destination: type("string"), Driver: type("string"), Mode: type("string"), RW: type("boolean"), Propagation: type("string") }).partial();
export type MountPoint = typeof MountPoint.infer;

export const DeviceMapping = type({ PathOnHost: type("string"), PathInContainer: type("string"), CgroupPermissions: type("string") }).partial();
export type DeviceMapping = typeof DeviceMapping.infer;

export const DeviceRequest = type({ Driver: type("string"), Count: type("number.integer"), DeviceIDs: type("string").array(), Capabilities: type("string").array().array(), Options: type({ "[string]": type("string") }) }).partial();
export type DeviceRequest = typeof DeviceRequest.infer;

export const ThrottleDevice = type({ Path: type("string"), Rate: type("number.integer >= 0") }).partial();
export type ThrottleDevice = typeof ThrottleDevice.infer;

export const Mount = type({ Target: type("string"), Source: type("string"), Type: type.enumerated("bind", "volume", "tmpfs", "npipe", "cluster"), ReadOnly: type("boolean"), Consistency: type("string"), BindOptions: type({ Propagation: type.enumerated("private", "rprivate", "shared", "rshared", "slave", "rslave"), NonRecursive: "boolean = false", CreateMountpoint: "boolean = false" }).partial(), VolumeOptions: type({ NoCopy: "boolean = false", Labels: type({ "[string]": type("string") }), DriverConfig: type({ Name: type("string"), Options: type({ "[string]": type("string") }) }).partial() }).partial(), TmpfsOptions: type({ SizeBytes: type("number.integer"), Mode: type("number.integer") }).partial() }).partial();
export type Mount = typeof Mount.infer;

export const RestartPolicy = type({ Name: type.enumerated("", "no", "always", "unless-stopped", "on-failure"), MaximumRetryCount: type("number.integer") }).partial();
export type RestartPolicy = typeof RestartPolicy.infer;

export const Resources = type({ CpuShares: type("number.integer"), Memory: "number.integer = 0", CgroupParent: type("string"), BlkioWeight: type("0 <= number.integer <= 1000"), BlkioWeightDevice: type({ Path: type("string"), Weight: type("number.integer >= 0") }).partial().array(), BlkioDeviceReadBps: ThrottleDevice.array(), BlkioDeviceWriteBps: ThrottleDevice.array(), BlkioDeviceReadIOps: ThrottleDevice.array(), BlkioDeviceWriteIOps: ThrottleDevice.array(), CpuPeriod: type("number.integer"), CpuQuota: type("number.integer"), CpuRealtimePeriod: type("number.integer"), CpuRealtimeRuntime: type("number.integer"), CpusetCpus: type("string"), CpusetMems: type("string"), Devices: DeviceMapping.array(), DeviceCgroupRules: type("string").array(), DeviceRequests: DeviceRequest.array(), KernelMemoryTCP: type("number.integer"), MemoryReservation: type("number.integer"), MemorySwap: type("number.integer"), MemorySwappiness: type("0 <= number.integer <= 100"), NanoCpus: type("number.integer"), OomKillDisable: type("boolean"), Init: type("boolean").or(type("null")), PidsLimit: type("number.integer").or(type("null")), Ulimits: type({ Name: type("string"), Soft: type("number.integer"), Hard: type("number.integer") }).partial().array(), CpuCount: type("number.integer"), CpuPercent: type("number.integer"), IOMaximumIOps: type("number.integer"), IOMaximumBandwidth: type("number.integer") }).partial();
export type Resources = typeof Resources.infer;

export const Limit = type({ NanoCPUs: type("number.integer"), MemoryBytes: type("number.integer"), Pids: "number.integer = 0" }).partial();
export type Limit = typeof Limit.infer;

export const GenericResources = type({ NamedResourceSpec: type({ Kind: type("string"), Value: type("string") }).partial(), DiscreteResourceSpec: type({ Kind: type("string"), Value: type("number.integer") }).partial() }).partial().array();
export type GenericResources = typeof GenericResources.infer;

export const ResourceObject = type({ NanoCPUs: type("number.integer"), MemoryBytes: type("number.integer"), GenericResources: GenericResources }).partial();
export type ResourceObject = typeof ResourceObject.infer;

export const HealthConfig = type({ Test: type("string").array(), Interval: type("number.integer"), Timeout: type("number.integer"), Retries: type("number.integer"), StartPeriod: type("number.integer") }).partial();
export type HealthConfig = typeof HealthConfig.infer;

export const HealthcheckResult = type({ Start: type("string.date"), End: type("string"), ExitCode: type("number.integer"), Output: type("string") }).partial().or(type("null"));
export type HealthcheckResult = typeof HealthcheckResult.infer;

export const Health = type({ Status: type.enumerated("none", "starting", "healthy", "unhealthy"), FailingStreak: type("number.integer"), Log: HealthcheckResult.array() }).partial().or(type("null"));
export type Health = typeof Health.infer;

export const PortBinding = type({ HostIp: type("string"), HostPort: type("string") }).partial();
export type PortBinding = typeof PortBinding.infer;

export const PortMap = type({ "[string]": PortBinding.array().or(type("null")) });
export type PortMap = typeof PortMap.infer;

export const HostConfig = Resources.and(type({ Binds: type("string").array(), ContainerIDFile: type("string"), LogConfig: type({ Type: type.enumerated("json-file", "syslog", "journald", "gelf", "fluentd", "awslogs", "splunk", "etwlogs", "none"), Config: type({ "[string]": type("string") }) }).partial(), NetworkMode: type("string"), PortBindings: PortMap, RestartPolicy: RestartPolicy, AutoRemove: type("boolean"), VolumeDriver: type("string"), VolumesFrom: type("string").array(), Mounts: Mount.array(), ConsoleSize: type("number.integer >= 0").array().or(type("null")), Annotations: type({ "[string]": type("string") }), CapAdd: type("string").array(), CapDrop: type("string").array(), CgroupnsMode: type.enumerated("private", "host"), Dns: type("string").array(), DnsOptions: type("string").array(), DnsSearch: type("string").array(), ExtraHosts: type("string").array(), GroupAdd: type("string").array(), IpcMode: type("string"), Cgroup: type("string"), Links: type("string").array(), OomScoreAdj: type("number.integer"), PidMode: type("string"), Privileged: type("boolean"), PublishAllPorts: type("boolean"), ReadonlyRootfs: type("boolean"), SecurityOpt: type("string").array(), StorageOpt: type({ "[string]": type("string") }), Tmpfs: type({ "[string]": type("string") }), UTSMode: type("string"), UsernsMode: type("string"), ShmSize: type("number.integer >= 0"), Sysctls: type({ "[string]": type("string") }), Runtime: type("string"), Isolation: type.enumerated("default", "process", "hyperv"), MaskedPaths: type("string").array(), ReadonlyPaths: type("string").array() }).partial());
export type HostConfig = typeof HostConfig.infer;

export const ContainerConfig = type({ Hostname: type("string"), Domainname: type("string"), User: type("string"), AttachStdin: "boolean = false", AttachStdout: "boolean = true", AttachStderr: "boolean = true", ExposedPorts: type({ "[string]": type({  }).partial() }).or(type("null")), Tty: "boolean = false", OpenStdin: "boolean = false", StdinOnce: "boolean = false", Env: type("string").array(), Cmd: type("string").array(), Healthcheck: HealthConfig, ArgsEscaped: type("boolean").or(type("null")), Image: type("string"), Volumes: type({ "[string]": type({  }).partial() }), WorkingDir: type("string"), Entrypoint: type("string").array(), NetworkDisabled: type("boolean").or(type("null")), MacAddress: type("string").or(type("null")), OnBuild: type("string").array().or(type("null")), Labels: type({ "[string]": type("string") }), StopSignal: type("string").or(type("null")), StopTimeout: type("number.integer").or(type("null")), Shell: type("string").array().or(type("null")) }).partial();
export type ContainerConfig = typeof ContainerConfig.infer;

export const EndpointIPAMConfig = type({ IPv4Address: type("string"), IPv6Address: type("string"), LinkLocalIPs: type("string").array() }).partial().or(type("null"));
export type EndpointIPAMConfig = typeof EndpointIPAMConfig.infer;

export const EndpointSettings = type({ IPAMConfig: EndpointIPAMConfig, Links: type("string").array(), Aliases: type("string").array(), NetworkID: type("string"), EndpointID: type("string"), Gateway: type("string"), IPAddress: type("string"), IPPrefixLen: type("number.integer"), IPv6Gateway: type("string"), GlobalIPv6Address: type("string"), GlobalIPv6PrefixLen: type("number.integer"), MacAddress: type("string"), DriverOpts: type({ "[string]": type("string") }).or(type("null")) }).partial();
export type EndpointSettings = typeof EndpointSettings.infer;

export const NetworkingConfig = type({ EndpointsConfig: type({ "[string]": EndpointSettings }) }).partial();
export type NetworkingConfig = typeof NetworkingConfig.infer;

export const Address = type({ Addr: type("string"), PrefixLen: type("number.integer") }).partial();
export type Address = typeof Address.infer;

export const NetworkSettings = type({ Bridge: type("string"), SandboxID: type("string"), HairpinMode: type("boolean"), LinkLocalIPv6Address: type("string"), LinkLocalIPv6PrefixLen: type("number.integer"), Ports: PortMap, SandboxKey: type("string"), SecondaryIPAddresses: Address.array().or(type("null")), SecondaryIPv6Addresses: Address.array().or(type("null")), EndpointID: type("string"), Gateway: type("string"), GlobalIPv6Address: type("string"), GlobalIPv6PrefixLen: type("number.integer"), IPAddress: type("string"), IPPrefixLen: type("number.integer"), IPv6Gateway: type("string"), MacAddress: type("string"), Networks: type({ "[string]": EndpointSettings }) }).partial();
export type NetworkSettings = typeof NetworkSettings.infer;

export const GraphDriverData = type({ Name: type("string"), Data: type({ "[string]": type("string") }) });
export type GraphDriverData = typeof GraphDriverData.infer;

export const ChangeType = type.enumerated(0, 1, 2);
export type ChangeType = typeof ChangeType.infer;

export const FilesystemChange = type({ Path: type("string"), Kind: ChangeType });
export type FilesystemChange = typeof FilesystemChange.infer;

export const ImageInspect = type({ Id: type("string"), RepoTags: type("string").array(), RepoDigests: type("string").array(), Parent: type("string"), Comment: type("string"), Created: type("string"), Container: type("string"), ContainerConfig: ContainerConfig, DockerVersion: type("string"), Author: type("string"), Config: ContainerConfig, Architecture: type("string"), Variant: type("string").or(type("null")), Os: type("string"), OsVersion: type("string").or(type("null")), Size: type("number.integer"), VirtualSize: type("number.integer"), GraphDriver: GraphDriverData, RootFS: type({ Type: type("string"), "Layers?": type("string").array() }), Metadata: type({ LastTagTime: type("string").or(type("null")) }).partial() }).partial();
export type ImageInspect = typeof ImageInspect.infer;

export const ImageSummary = type({ Id: type("string"), ParentId: type("string"), RepoTags: type("string").array(), RepoDigests: type("string").array(), Created: type("number.integer"), Size: type("number.integer"), SharedSize: type("number.integer"), "VirtualSize?": type("number.integer"), Labels: type({ "[string]": type("string") }), Containers: type("number.integer") });
export type ImageSummary = typeof ImageSummary.infer;

export const AuthConfig = type({ username: type("string"), password: type("string"), email: type("string"), serveraddress: type("string") }).partial();
export type AuthConfig = typeof AuthConfig.infer;

export const ProcessConfig = type({ privileged: type("boolean"), user: type("string"), tty: type("boolean"), entrypoint: type("string"), arguments: type("string").array() }).partial();
export type ProcessConfig = typeof ProcessConfig.infer;

export const ObjectVersion = type({ Index: type("number.integer") }).partial();
export type ObjectVersion = typeof ObjectVersion.infer;

export const Topology = type({ "[string]": type("string") });
export type Topology = typeof Topology.infer;

export const ClusterVolumeSpec = type({ Group: type("string"), AccessMode: type({ Scope: type.enumerated("single", "multi"), Sharing: type.enumerated("none", "readonly", "onewriter", "all"), MountVolume: type({  }).partial(), Secrets: type({ Key: type("string"), Secret: type("string") }).partial().array(), AccessibilityRequirements: type({ Requisite: Topology.array(), Preferred: Topology.array() }).partial(), CapacityRange: type({ RequiredBytes: type("number.integer"), LimitBytes: type("number.integer") }).partial(), Availability: type.enumerated("active", "pause", "drain") }).partial() }).partial();
export type ClusterVolumeSpec = typeof ClusterVolumeSpec.infer;

export const ClusterVolume = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: ClusterVolumeSpec, Info: type({ CapacityBytes: type("number.integer"), VolumeContext: type({ "[string]": type("string") }), VolumeID: type("string"), AccessibleTopology: Topology.array() }).partial(), PublishStatus: type({ NodeID: type("string"), State: type.enumerated("pending-publish", "published", "pending-node-unpublish", "pending-controller-unpublish"), PublishContext: type({ "[string]": type("string") }) }).partial().array() }).partial();
export type ClusterVolume = typeof ClusterVolume.infer;

export const Volume = type({ Name: type("string"), Driver: type("string"), Mountpoint: type("string"), "CreatedAt?": type("string"), "Status?": type({ "[string]": type({  }).partial() }), Labels: type({ "[string]": type("string") }), Scope: type.enumerated("local", "global"), "ClusterVolume?": ClusterVolume, Options: type({ "[string]": type("string") }), "UsageData?": type({ Size: "number.integer = -1", RefCount: "number.integer = -1" }).or(type("null")) });
export type Volume = typeof Volume.infer;

export const VolumeCreateOptions = type({ Name: type("string"), Driver: "string = \"local\"", DriverOpts: type({ "[string]": type("string") }), Labels: type({ "[string]": type("string") }), ClusterVolumeSpec: ClusterVolumeSpec }).partial();
export type VolumeCreateOptions = typeof VolumeCreateOptions.infer;

export const VolumeListResponse = type({ Volumes: Volume.array(), Warnings: type("string").array() }).partial();
export type VolumeListResponse = typeof VolumeListResponse.infer;

export const IPAMConfig = type({ Subnet: type("string"), IPRange: type("string"), Gateway: type("string"), AuxiliaryAddresses: type({ "[string]": type("string") }) }).partial();
export type IPAMConfig = typeof IPAMConfig.infer;

export const IPAM = type({ Driver: "string = \"default\"", Config: IPAMConfig.array(), Options: type({ "[string]": type("string") }) }).partial();
export type IPAM = typeof IPAM.infer;

export const NetworkContainer = type({ Name: type("string"), EndpointID: type("string"), MacAddress: type("string"), IPv4Address: type("string"), IPv6Address: type("string") }).partial();
export type NetworkContainer = typeof NetworkContainer.infer;

export const Network = type({ Name: type("string"), Id: type("string"), Created: type("string"), Scope: type("string"), Driver: type("string"), EnableIPv6: type("boolean"), IPAM: IPAM, Internal: type("boolean"), Attachable: type("boolean"), Ingress: type("boolean"), Containers: type({ "[string]": NetworkContainer }), Options: type({ "[string]": type("string") }), Labels: type({ "[string]": type("string") }) }).partial();
export type Network = typeof Network.infer;

export const ErrorDetail = type({ code: type("number.integer"), message: type("string") }).partial();
export type ErrorDetail = typeof ErrorDetail.infer;

export const ProgressDetail = type({ current: type("number.integer"), total: type("number.integer") }).partial();
export type ProgressDetail = typeof ProgressDetail.infer;

export const ImageID = type({ ID: type("string") }).partial();
export type ImageID = typeof ImageID.infer;

export const BuildInfo = type({ id: type("string"), stream: type("string"), error: type("string"), errorDetail: ErrorDetail, status: type("string"), progress: type("string"), progressDetail: ProgressDetail, aux: ImageID }).partial();
export type BuildInfo = typeof BuildInfo.infer;

export const BuildCache = type({ ID: type("string"), Parent: type("string").or(type("null")), Parents: type("string").array().or(type("null")), Type: type.enumerated("internal", "frontend", "source.local", "source.git.checkout", "exec.cachemount", "regular"), Description: type("string"), InUse: type("boolean"), Shared: type("boolean"), Size: type("number.integer"), CreatedAt: type("string"), LastUsedAt: type("string").or(type("null")), UsageCount: type("number.integer") }).partial();
export type BuildCache = typeof BuildCache.infer;

export const CreateImageInfo = type({ id: type("string"), error: type("string"), errorDetail: ErrorDetail, status: type("string"), progress: type("string"), progressDetail: ProgressDetail }).partial();
export type CreateImageInfo = typeof CreateImageInfo.infer;

export const PushImageInfo = type({ error: type("string"), status: type("string"), progress: type("string"), progressDetail: ProgressDetail }).partial();
export type PushImageInfo = typeof PushImageInfo.infer;

export const ErrorResponse = type({ message: type("string") });
export type ErrorResponse = typeof ErrorResponse.infer;

export const IdResponse = type({ Id: type("string") });
export type IdResponse = typeof IdResponse.infer;

export const PluginMount = type({ Name: type("string"), Description: type("string"), Settable: type("string").array(), Source: type("string"), Destination: type("string"), Type: type("string"), Options: type("string").array() });
export type PluginMount = typeof PluginMount.infer;

export const PluginDevice = type({ Name: type("string"), Description: type("string"), Settable: type("string").array(), Path: type("string") });
export type PluginDevice = typeof PluginDevice.infer;

export const PluginEnv = type({ Name: type("string"), Description: type("string"), Settable: type("string").array(), Value: type("string") });
export type PluginEnv = typeof PluginEnv.infer;

export const PluginInterfaceType = type({ Prefix: type("string"), Capability: type("string"), Version: type("string") });
export type PluginInterfaceType = typeof PluginInterfaceType.infer;

export const PluginPrivilege = type({ Name: type("string"), Description: type("string"), Value: type("string").array() }).partial();
export type PluginPrivilege = typeof PluginPrivilege.infer;

export const Plugin = type({ "Id?": type("string"), Name: type("string"), Enabled: type("boolean"), Settings: type({ Mounts: PluginMount.array(), Env: type("string").array(), Args: type("string").array(), Devices: PluginDevice.array() }), "PluginReference?": type("string"), Config: type({ "DockerVersion?": type("string"), Description: type("string"), Documentation: type("string"), Interface: type({ Types: PluginInterfaceType.array(), Socket: type("string"), "ProtocolScheme?": type.enumerated("", "moby.plugins.http/v1") }), Entrypoint: type("string").array(), WorkDir: type("string"), "User?": type({ UID: type("number.integer"), GID: type("number.integer") }).partial(), Network: type({ Type: type("string") }), Linux: type({ Capabilities: type("string").array(), AllowAllDevices: type("boolean"), Devices: PluginDevice.array() }), PropagatedMount: type("string"), IpcHost: type("boolean"), PidHost: type("boolean"), Mounts: PluginMount.array(), Env: PluginEnv.array(), Args: type({ Name: type("string"), Description: type("string"), Settable: type("string").array(), Value: type("string").array() }), "rootfs?": type({ type: type("string"), diff_ids: type("string").array() }).partial() }) });
export type Plugin = typeof Plugin.infer;

export const NodeSpec = type({ Name: type("string"), Labels: type({ "[string]": type("string") }), Role: type.enumerated("worker", "manager"), Availability: type.enumerated("active", "pause", "drain") }).partial();
export type NodeSpec = typeof NodeSpec.infer;

export const Platform = type({ Architecture: type("string"), OS: type("string") }).partial();
export type Platform = typeof Platform.infer;

export const EngineDescription = type({ EngineVersion: type("string"), Labels: type({ "[string]": type("string") }), Plugins: type({ Type: type("string"), Name: type("string") }).partial().array() }).partial();
export type EngineDescription = typeof EngineDescription.infer;

export const TLSInfo = type({ TrustRoot: type("string"), CertIssuerSubject: type("string"), CertIssuerPublicKey: type("string") }).partial();
export type TLSInfo = typeof TLSInfo.infer;

export const NodeDescription = type({ Hostname: type("string"), Platform: Platform, Resources: ResourceObject, Engine: EngineDescription, TLSInfo: TLSInfo }).partial();
export type NodeDescription = typeof NodeDescription.infer;

export const NodeState = type.enumerated("unknown", "down", "ready", "disconnected");
export type NodeState = typeof NodeState.infer;

export const NodeStatus = type({ State: NodeState, Message: type("string"), Addr: type("string") }).partial();
export type NodeStatus = typeof NodeStatus.infer;

export const Reachability = type.enumerated("unknown", "unreachable", "reachable");
export type Reachability = typeof Reachability.infer;

export const ManagerStatus = type({ Leader: "boolean = false", Reachability: Reachability, Addr: type("string") }).partial().or(type("null"));
export type ManagerStatus = typeof ManagerStatus.infer;

export const Node = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: NodeSpec, Description: NodeDescription, Status: NodeStatus, ManagerStatus: ManagerStatus }).partial();
export type Node = typeof Node.infer;

export const SwarmSpec = type({ Name: type("string"), Labels: type({ "[string]": type("string") }), Orchestration: type({ TaskHistoryRetentionLimit: type("number.integer") }).partial().or(type("null")), Raft: type({ SnapshotInterval: type("number.integer"), KeepOldSnapshots: type("number.integer"), LogEntriesForSlowFollowers: type("number.integer"), ElectionTick: type("number.integer"), HeartbeatTick: type("number.integer") }).partial(), Dispatcher: type({ HeartbeatPeriod: type("number.integer") }).partial().or(type("null")), CAConfig: type({ NodeCertExpiry: type("number.integer"), ExternalCAs: type({ Protocol: type("'cfssl'"), URL: type("string"), Options: type({ "[string]": type("string") }), CACert: type("string") }).partial().array(), SigningCACert: type("string"), SigningCAKey: type("string"), ForceRotate: type("number.integer") }).partial().or(type("null")), EncryptionConfig: type({ AutoLockManagers: type("boolean") }).partial(), TaskDefaults: type({ LogDriver: type({ Name: type("string"), Options: type({ "[string]": type("string") }) }).partial() }).partial() }).partial();
export type SwarmSpec = typeof SwarmSpec.infer;

export const ClusterInfo = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: SwarmSpec, TLSInfo: TLSInfo, RootRotationInProgress: type("boolean"), DataPathPort: type("number.integer"), DefaultAddrPool: type("string").array(), SubnetSize: type("number.integer <= 29") }).partial().or(type("null"));
export type ClusterInfo = typeof ClusterInfo.infer;

export const JoinTokens = type({ Worker: type("string"), Manager: type("string") }).partial();
export type JoinTokens = typeof JoinTokens.infer;

export const Swarm = ClusterInfo.and(type({ JoinTokens: JoinTokens }).partial());
export type Swarm = typeof Swarm.infer;

export const NetworkAttachmentConfig = type({ Target: type("string"), Aliases: type("string").array(), DriverOpts: type({ "[string]": type("string") }) }).partial();
export type NetworkAttachmentConfig = typeof NetworkAttachmentConfig.infer;

export const TaskSpec = type({ PluginSpec: type({ Name: type("string"), Remote: type("string"), Disabled: type("boolean"), PluginPrivilege: PluginPrivilege.array() }).partial(), ContainerSpec: type({ Image: type("string"), Labels: type({ "[string]": type("string") }), Command: type("string").array(), Args: type("string").array(), Hostname: type("string"), Env: type("string").array(), Dir: type("string"), User: type("string"), Groups: type("string").array(), Privileges: type({ CredentialSpec: type({ Config: type("string"), File: type("string"), Registry: type("string") }).partial(), SELinuxContext: type({ Disable: type("boolean"), User: type("string"), Role: type("string"), Type: type("string"), Level: type("string") }).partial() }).partial(), TTY: type("boolean"), OpenStdin: type("boolean"), ReadOnly: type("boolean"), Mounts: Mount.array(), StopSignal: type("string"), StopGracePeriod: type("number.integer"), HealthCheck: HealthConfig, Hosts: type("string").array(), DNSConfig: type({ Nameservers: type("string").array(), Search: type("string").array(), Options: type("string").array() }).partial(), Secrets: type({ File: type({ Name: type("string"), UID: type("string"), GID: type("string"), Mode: type("number.integer") }).partial(), SecretID: type("string"), SecretName: type("string") }).partial().array(), Configs: type({ File: type({ Name: type("string"), UID: type("string"), GID: type("string"), Mode: type("number.integer") }).partial(), Runtime: type({  }).partial(), ConfigID: type("string"), ConfigName: type("string") }).partial().array(), Isolation: type.enumerated("default", "process", "hyperv"), Init: type("boolean").or(type("null")), Sysctls: type({ "[string]": type("string") }), CapabilityAdd: type("string").array(), CapabilityDrop: type("string").array(), Ulimits: type({ Name: type("string"), Soft: type("number.integer"), Hard: type("number.integer") }).partial().array() }).partial(), NetworkAttachmentSpec: type({ ContainerID: type("string") }).partial(), Resources: type({ Limits: Limit, Reservations: ResourceObject }).partial(), RestartPolicy: type({ Condition: type.enumerated("none", "on-failure", "any"), Delay: type("number.integer"), MaxAttempts: "number.integer = 0", Window: "number.integer = 0" }).partial(), Placement: type({ Constraints: type("string").array(), Preferences: type({ Spread: type({ SpreadDescriptor: type("string") }).partial() }).partial().array(), MaxReplicas: "number.integer = 0", Platforms: Platform.array() }).partial(), ForceUpdate: type("number.integer"), Runtime: type("string"), Networks: NetworkAttachmentConfig.array(), LogDriver: type({ Name: type("string"), Options: type({ "[string]": type("string") }) }).partial() }).partial();
export type TaskSpec = typeof TaskSpec.infer;

export const TaskState = type.enumerated("new", "allocated", "pending", "assigned", "accepted", "preparing", "ready", "starting", "running", "complete", "shutdown", "failed", "rejected", "remove", "orphaned");
export type TaskState = typeof TaskState.infer;

export const Task = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Name: type("string"), Labels: type({ "[string]": type("string") }), Spec: TaskSpec, ServiceID: type("string"), Slot: type("number.integer"), NodeID: type("string"), AssignedGenericResources: GenericResources, Status: type({ Timestamp: type("string"), State: TaskState, Message: type("string"), Err: type("string"), ContainerStatus: type({ ContainerID: type("string"), PID: type("number.integer"), ExitCode: type("number.integer") }).partial() }).partial(), DesiredState: TaskState, JobIteration: ObjectVersion }).partial();
export type Task = typeof Task.infer;

export const EndpointPortConfig = type({ Name: type("string"), Protocol: type.enumerated("tcp", "udp", "sctp"), TargetPort: type("number.integer"), PublishedPort: type("number.integer"), PublishMode: type.enumerated("ingress", "host") }).partial();
export type EndpointPortConfig = typeof EndpointPortConfig.infer;

export const EndpointSpec = type({ Mode: type.enumerated("vip", "dnsrr"), Ports: EndpointPortConfig.array() }).partial();
export type EndpointSpec = typeof EndpointSpec.infer;

export const ServiceSpec = type({ Name: type("string"), Labels: type({ "[string]": type("string") }), TaskTemplate: TaskSpec, Mode: type({ Replicated: type({ Replicas: type("number.integer") }).partial(), Global: type({  }).partial(), ReplicatedJob: type({ MaxConcurrent: "number.integer = 1", TotalCompletions: type("number.integer") }).partial(), GlobalJob: type({  }).partial() }).partial(), UpdateConfig: type({ Parallelism: type("number.integer"), Delay: type("number.integer"), FailureAction: type.enumerated("continue", "pause", "rollback"), Monitor: type("number.integer"), MaxFailureRatio: type("number"), Order: type.enumerated("stop-first", "start-first") }).partial(), RollbackConfig: type({ Parallelism: type("number.integer"), Delay: type("number.integer"), FailureAction: type.enumerated("continue", "pause"), Monitor: type("number.integer"), MaxFailureRatio: type("number"), Order: type.enumerated("stop-first", "start-first") }).partial(), Networks: NetworkAttachmentConfig.array(), EndpointSpec: EndpointSpec }).partial();
export type ServiceSpec = typeof ServiceSpec.infer;

export const Service = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: ServiceSpec, Endpoint: type({ Spec: EndpointSpec, Ports: EndpointPortConfig.array(), VirtualIPs: type({ NetworkID: type("string"), Addr: type("string") }).partial().array() }).partial(), UpdateStatus: type({ State: type.enumerated("updating", "paused", "completed"), StartedAt: type("string"), CompletedAt: type("string"), Message: type("string") }).partial(), ServiceStatus: type({ RunningTasks: type("number.integer"), DesiredTasks: type("number.integer"), CompletedTasks: type("number.integer") }).partial(), JobStatus: type({ JobIteration: ObjectVersion, LastExecution: type("string") }).partial() }).partial();
export type Service = typeof Service.infer;

export const ImageDeleteResponseItem = type({ Untagged: type("string"), Deleted: type("string") }).partial();
export type ImageDeleteResponseItem = typeof ImageDeleteResponseItem.infer;

export const ServiceUpdateResponse = type({ Warnings: type("string").array() }).partial();
export type ServiceUpdateResponse = typeof ServiceUpdateResponse.infer;

export const ContainerSummary = type({ Id: type("string"), Names: type("string").array(), Image: type("string"), ImageID: type("string"), Command: type("string"), Created: type("number.integer"), Ports: Port.array(), SizeRw: type("number.integer"), SizeRootFs: type("number.integer"), Labels: type({ "[string]": type("string") }), State: type("string"), Status: type("string"), HostConfig: type({ NetworkMode: type("string") }).partial(), NetworkSettings: type({ Networks: type({ "[string]": EndpointSettings }) }).partial(), Mounts: MountPoint.array() }).partial();
export type ContainerSummary = typeof ContainerSummary.infer;

export const Driver = type({ Name: type("string"), "Options?": type({ "[string]": type("string") }) });
export type Driver = typeof Driver.infer;

export const SecretSpec = type({ Name: type("string"), Labels: type({ "[string]": type("string") }), Data: type("string"), Driver: Driver, Templating: Driver }).partial();
export type SecretSpec = typeof SecretSpec.infer;

export const Secret = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: SecretSpec }).partial();
export type Secret = typeof Secret.infer;

export const ConfigSpec = type({ Name: type("string"), Labels: type({ "[string]": type("string") }), Data: type("string"), Templating: Driver }).partial();
export type ConfigSpec = typeof ConfigSpec.infer;

export const Config = type({ ID: type("string"), Version: ObjectVersion, CreatedAt: type("string"), UpdatedAt: type("string"), Spec: ConfigSpec }).partial();
export type Config = typeof Config.infer;

export const ContainerState = type({ Status: type.enumerated("created", "running", "paused", "restarting", "removing", "exited", "dead"), Running: type("boolean"), Paused: type("boolean"), Restarting: type("boolean"), OOMKilled: type("boolean"), Dead: type("boolean"), Pid: type("number.integer"), ExitCode: type("number.integer"), Error: type("string"), StartedAt: type("string"), FinishedAt: type("string"), Health: Health }).partial().or(type("null"));
export type ContainerState = typeof ContainerState.infer;

export const ContainerCreateResponse = type({ Id: type("string"), Warnings: type("string").array() });
export type ContainerCreateResponse = typeof ContainerCreateResponse.infer;

export const ContainerWaitExitError = type({ Message: type("string") }).partial();
export type ContainerWaitExitError = typeof ContainerWaitExitError.infer;

export const ContainerWaitResponse = type({ StatusCode: type("number.integer"), "Error?": ContainerWaitExitError });
export type ContainerWaitResponse = typeof ContainerWaitResponse.infer;

export const SystemVersion = type({ Platform: type({ Name: type("string") }), Components: type({ Name: type("string"), Version: type("string"), "Details?": type({  }).partial().or(type("null")) }).array(), Version: type("string"), ApiVersion: type("string"), MinAPIVersion: type("string"), GitCommit: type("string"), GoVersion: type("string"), Os: type("string"), Arch: type("string"), KernelVersion: type("string"), Experimental: type("boolean"), BuildTime: type("string") }).partial();
export type SystemVersion = typeof SystemVersion.infer;

export const PluginsInfo = type({ Volume: type("string").array(), Network: type("string").array(), Authorization: type("string").array(), Log: type("string").array() }).partial();
export type PluginsInfo = typeof PluginsInfo.infer;

export const IndexInfo = type({ Name: type("string"), Mirrors: type("string").array(), Secure: type("boolean"), Official: type("boolean") }).partial().or(type("null"));
export type IndexInfo = typeof IndexInfo.infer;

export const RegistryServiceConfig = type({ AllowNondistributableArtifactsCIDRs: type("string").array(), AllowNondistributableArtifactsHostnames: type("string").array(), InsecureRegistryCIDRs: type("string").array(), IndexConfigs: type({ "[string]": IndexInfo }), Mirrors: type("string").array() }).partial().or(type("null"));
export type RegistryServiceConfig = typeof RegistryServiceConfig.infer;

export const Runtime = type({ path: type("string"), runtimeArgs: type("string").array().or(type("null")) }).partial();
export type Runtime = typeof Runtime.infer;

export const LocalNodeState = type.enumerated("", "inactive", "pending", "active", "error", "locked");
export type LocalNodeState = typeof LocalNodeState.infer;

export const PeerNode = type({ NodeID: type("string"), Addr: type("string") }).partial();
export type PeerNode = typeof PeerNode.infer;

export const SwarmInfo = type({ NodeID: "string = \"\"", NodeAddr: "string = \"\"", LocalNodeState: LocalNodeState, ControlAvailable: "boolean = false", Error: "string = \"\"", RemoteManagers: PeerNode.array().or(type("null")), Nodes: type("number.integer").or(type("null")), Managers: type("number.integer").or(type("null")), Cluster: ClusterInfo }).partial();
export type SwarmInfo = typeof SwarmInfo.infer;

export const Commit = type({ ID: type("string"), Expected: type("string") }).partial();
export type Commit = typeof Commit.infer;

export const SystemInfo = type({ ID: type("string"), Containers: type("number.integer"), ContainersRunning: type("number.integer"), ContainersPaused: type("number.integer"), ContainersStopped: type("number.integer"), Images: type("number.integer"), Driver: type("string"), DriverStatus: type("string").array().array(), DockerRootDir: type("string"), Plugins: PluginsInfo, MemoryLimit: type("boolean"), SwapLimit: type("boolean"), KernelMemoryTCP: type("boolean"), CpuCfsPeriod: type("boolean"), CpuCfsQuota: type("boolean"), CPUShares: type("boolean"), CPUSet: type("boolean"), PidsLimit: type("boolean"), OomKillDisable: type("boolean"), IPv4Forwarding: type("boolean"), BridgeNfIptables: type("boolean"), BridgeNfIp6tables: type("boolean"), Debug: type("boolean"), NFd: type("number.integer"), NGoroutines: type("number.integer"), SystemTime: type("string"), LoggingDriver: type("string"), CgroupDriver: type.enumerated("cgroupfs", "systemd", "none"), CgroupVersion: type.enumerated("1", "2"), NEventsListener: type("number.integer"), KernelVersion: type("string"), OperatingSystem: type("string"), OSVersion: type("string"), OSType: type("string"), Architecture: type("string"), NCPU: type("number.integer"), MemTotal: type("number.integer"), IndexServerAddress: "string = \"https://index.docker.io/v1/\"", RegistryConfig: RegistryServiceConfig, GenericResources: GenericResources, HttpProxy: type("string"), HttpsProxy: type("string"), NoProxy: type("string"), Name: type("string"), Labels: type("string").array(), ExperimentalBuild: type("boolean"), ServerVersion: type("string"), Runtimes: type({ "[string]": Runtime }), DefaultRuntime: "string = \"runc\"", Swarm: SwarmInfo, LiveRestoreEnabled: "boolean = false", Isolation: type.enumerated("default", "hyperv", "process"), InitBinary: type("string"), ContainerdCommit: Commit, RuncCommit: Commit, InitCommit: Commit, SecurityOptions: type("string").array(), ProductLicense: type("string"), DefaultAddressPools: type({ Base: type("string"), Size: type("number.integer") }).partial().array(), Warnings: type("string").array() }).partial();
export type SystemInfo = typeof SystemInfo.infer;

export const EventActor = type({ ID: type("string"), Attributes: type({ "[string]": type("string") }) }).partial();
export type EventActor = typeof EventActor.infer;

export const EventMessage = type({ Type: type.enumerated("builder", "config", "container", "daemon", "image", "network", "node", "plugin", "secret", "service", "volume"), Action: type("string"), Actor: EventActor, scope: type.enumerated("local", "swarm"), time: type("number.integer"), timeNano: type("number.integer") }).partial();
export type EventMessage = typeof EventMessage.infer;

export const OCIDescriptor = type({ mediaType: type("string"), digest: type("string"), size: type("number.integer") }).partial();
export type OCIDescriptor = typeof OCIDescriptor.infer;

export const OCIPlatform = type({ architecture: type("string"), os: type("string"), "os.version": type("string"), "os.features": type("string").array(), variant: type("string") }).partial();
export type OCIPlatform = typeof OCIPlatform.infer;

export const DistributionInspect = type({ Descriptor: OCIDescriptor, Platforms: OCIPlatform.array() });
export type DistributionInspect = typeof DistributionInspect.infer;
// </Schemas>

// <Endpoints>
export type get_ContainerList = typeof get_ContainerList;
export const get_ContainerList = {
  method: type("'GET'"),
  path: type("'/containers/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ all: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), limit: type("string.integer.parse"), size: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), filters: type("string") }).partial().optional() },
  responses: { 200: ContainerSummary.array(), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerCreate = typeof post_ContainerCreate;
export const post_ContainerCreate = {
  method: type("'POST'"),
  path: type("'/containers/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ name: type("string").narrow((s) => typeof s === "string" && new RegExp("^/?[a-zA-Z0-9][a-zA-Z0-9_.-]+$").test(s)), platform: type("string") }).partial().optional(), body: ContainerConfig.and(type({ HostConfig: HostConfig, NetworkingConfig: NetworkingConfig }).partial()) },
  responses: { 201: ContainerCreateResponse, 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerInspect = typeof get_ContainerInspect;
export const get_ContainerInspect = {
  method: type("'GET'"),
  path: type("'/containers/{id}/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ size: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: type({ Id: type("string"), Created: type("string"), Path: type("string"), Args: type("string").array(), State: ContainerState, Image: type("string"), ResolvConfPath: type("string"), HostnamePath: type("string"), HostsPath: type("string"), LogPath: type("string"), Name: type("string"), RestartCount: type("number.integer"), Driver: type("string"), Platform: type("string"), MountLabel: type("string"), ProcessLabel: type("string"), AppArmorProfile: type("string"), ExecIDs: type("string").array().or(type("null")), HostConfig: HostConfig, GraphDriver: GraphDriverData, SizeRw: type("number.integer"), SizeRootFs: type("number.integer"), Mounts: MountPoint.array(), Config: ContainerConfig, NetworkSettings: NetworkSettings }).partial(), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerTop = typeof get_ContainerTop;
export const get_ContainerTop = {
  method: type("'GET'"),
  path: type("'/containers/{id}/top'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ ps_args: "string = \"-ef\"" }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: type({ Titles: type("string").array(), Processes: type("string").array().array() }).partial(), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerLogs = typeof get_ContainerLogs;
export const get_ContainerLogs = {
  method: type("'GET'"),
  path: type("'/containers/{id}/logs'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ follow: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdout: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stderr: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), since: type("string.integer.parse"), until: type("string.integer.parse"), timestamps: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), tail: "string = \"all\"" }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: type("unknown"), 404: type("unknown"), 500: type("unknown") },
};

export type get_ContainerChanges = typeof get_ContainerChanges;
export const get_ContainerChanges = {
  method: type("'GET'"),
  path: type("'/containers/{id}/changes'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 200: FilesystemChange.array(), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerExport = typeof get_ContainerExport;
export const get_ContainerExport = {
  method: type("'GET'"),
  path: type("'/containers/{id}/export'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 200: type("unknown"), 404: type("unknown"), 500: type("unknown") },
};

export type get_ContainerStats = typeof get_ContainerStats;
export const get_ContainerStats = {
  method: type("'GET'"),
  path: type("'/containers/{id}/stats'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ stream: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), "one-shot": type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: type({ "[string]": type("unknown") }), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerResize = typeof post_ContainerResize;
export const post_ContainerResize = {
  method: type("'POST'"),
  path: type("'/containers/{id}/resize'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ h: type("string.integer.parse"), w: type("string.integer.parse") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: type("unknown"), 404: type("unknown"), 500: type("unknown") },
};

export type post_ContainerStart = typeof post_ContainerStart;
export const post_ContainerStart = {
  method: type("'POST'"),
  path: type("'/containers/{id}/start'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ detachKeys: type("string") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 204: type("unknown"), 304: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerStop = typeof post_ContainerStop;
export const post_ContainerStop = {
  method: type("'POST'"),
  path: type("'/containers/{id}/stop'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ signal: type("string"), t: type("string.integer.parse") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 204: type("unknown"), 304: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRestart = typeof post_ContainerRestart;
export const post_ContainerRestart = {
  method: type("'POST'"),
  path: type("'/containers/{id}/restart'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ signal: type("string"), t: type("string.integer.parse") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 204: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerKill = typeof post_ContainerKill;
export const post_ContainerKill = {
  method: type("'POST'"),
  path: type("'/containers/{id}/kill'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ signal: "string = \"SIGKILL\"" }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 204: type("unknown"), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUpdate = typeof post_ContainerUpdate;
export const post_ContainerUpdate = {
  method: type("'POST'"),
  path: type("'/containers/{id}/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }), body: Resources.and(type({ RestartPolicy: RestartPolicy }).partial()) },
  responses: { 200: type({ Warnings: type("string").array() }).partial(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRename = typeof post_ContainerRename;
export const post_ContainerRename = {
  method: type("'POST'"),
  path: type("'/containers/{id}/rename'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ name: type("string") }), path: type({ id: type("string") }) },
  responses: { 204: type("unknown"), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerPause = typeof post_ContainerPause;
export const post_ContainerPause = {
  method: type("'POST'"),
  path: type("'/containers/{id}/pause'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 204: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUnpause = typeof post_ContainerUnpause;
export const post_ContainerUnpause = {
  method: type("'POST'"),
  path: type("'/containers/{id}/unpause'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 204: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerAttach = typeof post_ContainerAttach;
export const post_ContainerAttach = {
  method: type("'POST'"),
  path: type("'/containers/{id}/attach'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ detachKeys: type("string"), logs: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stream: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdin: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdout: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stderr: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 101: type("unknown"), 200: type("unknown"), 400: type("unknown"), 404: type("unknown"), 500: type("unknown") },
};

export type get_ContainerAttachWebsocket = typeof get_ContainerAttachWebsocket;
export const get_ContainerAttachWebsocket = {
  method: type("'GET'"),
  path: type("'/containers/{id}/attach/ws'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ detachKeys: type("string"), logs: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stream: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdin: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdout: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stderr: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 101: type("unknown"), 200: type("unknown"), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerWait = typeof post_ContainerWait;
export const post_ContainerWait = {
  method: type("'POST'"),
  path: type("'/containers/{id}/wait'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ condition: type.enumerated("not-running", "next-exit", "removed") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: ContainerWaitResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_ContainerDelete = typeof delete_ContainerDelete;
export const delete_ContainerDelete = {
  method: type("'DELETE'"),
  path: type("'/containers/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ v: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), link: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 204: type("unknown"), 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerArchive = typeof get_ContainerArchive;
export const get_ContainerArchive = {
  method: type("'GET'"),
  path: type("'/containers/{id}/archive'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ path: type("string") }), path: type({ id: type("string") }) },
  responses: { 200: type("unknown"), 400: type("unknown"), 404: type("unknown"), 500: type("unknown") },
};

export type put_PutContainerArchive = typeof put_PutContainerArchive;
export const put_PutContainerArchive = {
  method: type("'PUT'"),
  path: type("'/containers/{id}/archive'"),
  requestFormat: type("'binary'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ path: type("string"), "noOverwriteDirNonDir?": type("string"), "copyUIDGID?": type("string") }), path: type({ id: type("string") }), body: type.instanceOf(Blob) },
  responses: { 200: type("unknown"), 400: ErrorResponse, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type head_ContainerArchiveInfo = typeof head_ContainerArchiveInfo;
export const head_ContainerArchiveInfo = {
  method: type("'HEAD'"),
  path: type("'/containers/{id}/archive'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ path: type("string") }), path: type({ id: type("string") }) },
  responses: { 200: type("unknown"), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
  responseHeaders: { 200: type({ "X-Docker-Container-Path-Stat": type("string") }) },
};

export type post_ContainerPrune = typeof post_ContainerPrune;
export const post_ContainerPrune = {
  method: type("'POST'"),
  path: type("'/containers/prune'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().optional() },
  responses: { 200: type({ ContainersDeleted: type("string").array(), SpaceReclaimed: type("number.integer") }).partial(), 500: ErrorResponse },
};

export type get_ImageList = typeof get_ImageList;
export const get_ImageList = {
  method: type("'GET'"),
  path: type("'/images/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ all: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), filters: type("string"), "shared-size": type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), digests: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional() },
  responses: { 200: ImageSummary.array(), 500: ErrorResponse },
};

export type post_ImageBuild = typeof post_ImageBuild;
export const post_ImageBuild = {
  method: type("'POST'"),
  path: type("'/build'"),
  requestFormat: type("'binary'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ dockerfile: "string = \"Dockerfile\"", t: type("string"), extrahosts: type("string"), remote: type("string"), q: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), nocache: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), cachefrom: type("string"), pull: type("string"), rm: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), forcerm: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), memory: type("string.integer.parse"), memswap: type("string.integer.parse"), cpushares: type("string.integer.parse"), cpusetcpus: type("string"), cpuperiod: type("string.integer.parse"), cpuquota: type("string.integer.parse"), buildargs: type("string"), shmsize: type("string.integer.parse"), squash: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), labels: type("string"), networkmode: type("string"), platform: type("string"), target: type("string"), outputs: type("string") }).partial().optional(), header: type({ "Content-type": type("'application/x-tar'"), "X-Registry-Config": type("string") }).partial().optional(), body: type.instanceOf(Blob) },
  responses: { 200: type("unknown"), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_BuildPrune = typeof post_BuildPrune;
export const post_BuildPrune = {
  method: type("'POST'"),
  path: type("'/build/prune'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ "keep-storage": type("string.integer.parse"), all: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), filters: type("string") }).partial().optional() },
  responses: { 200: type({ CachesDeleted: type("string").array(), SpaceReclaimed: type("number.integer") }).partial(), 500: ErrorResponse },
};

export type post_ImageCreate = typeof post_ImageCreate;
export const post_ImageCreate = {
  method: type("'POST'"),
  path: type("'/images/create'"),
  requestFormat: type("'text'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ fromImage: type("string"), fromSrc: type("string"), repo: type("string"), tag: type("string"), message: type("string"), changes: type("string").array(), platform: type("string") }).partial().optional(), header: type({ "X-Registry-Auth": type("string") }).partial().optional(), body: type("string") },
  responses: { 200: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageInspect = typeof get_ImageInspect;
export const get_ImageInspect = {
  method: type("'GET'"),
  path: type("'/images/{name}/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }) },
  responses: { 200: ImageInspect, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageHistory = typeof get_ImageHistory;
export const get_ImageHistory = {
  method: type("'GET'"),
  path: type("'/images/{name}/history'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }) },
  responses: { 200: type({ Id: type("string"), Created: type("number.integer"), CreatedBy: type("string"), Tags: type("string").array(), Size: type("number.integer"), Comment: type("string") }).array(), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImagePush = typeof post_ImagePush;
export const post_ImagePush = {
  method: type("'POST'"),
  path: type("'/images/{name}/push'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ tag: type("string") }).partial().optional(), path: type({ name: type("string") }), header: type({ "X-Registry-Auth": type("string") }) },
  responses: { 200: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImageTag = typeof post_ImageTag;
export const post_ImageTag = {
  method: type("'POST'"),
  path: type("'/images/{name}/tag'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ repo: type("string"), tag: type("string") }).partial().optional(), path: type({ name: type("string") }) },
  responses: { 201: type("unknown"), 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type delete_ImageDelete = typeof delete_ImageDelete;
export const delete_ImageDelete = {
  method: type("'DELETE'"),
  path: type("'/images/{name}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), noprune: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional(), path: type({ name: type("string") }) },
  responses: { 200: ImageDeleteResponseItem.array(), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageSearch = typeof get_ImageSearch;
export const get_ImageSearch = {
  method: type("'GET'"),
  path: type("'/images/search'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ term: type("string"), "limit?": type("string.integer.parse"), "filters?": type("string") }) },
  responses: { 200: type({ description: type("string"), is_official: type("boolean"), is_automated: type("boolean"), name: type("string"), star_count: type("number.integer") }).partial().array(), 500: ErrorResponse },
};

export type post_ImagePrune = typeof post_ImagePrune;
export const post_ImagePrune = {
  method: type("'POST'"),
  path: type("'/images/prune'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().optional() },
  responses: { 200: type({ ImagesDeleted: ImageDeleteResponseItem.array(), SpaceReclaimed: type("number.integer") }).partial(), 500: ErrorResponse },
};

export type post_SystemAuth = typeof post_SystemAuth;
export const post_SystemAuth = {
  method: type("'POST'"),
  path: type("'/auth'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: AuthConfig },
  responses: { 200: type({ Status: type("string"), "IdentityToken?": type("string") }), 204: type("unknown"), 401: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemInfo = typeof get_SystemInfo;
export const get_SystemInfo = {
  method: type("'GET'"),
  path: type("'/info'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: SystemInfo, 500: ErrorResponse },
};

export type get_SystemVersion = typeof get_SystemVersion;
export const get_SystemVersion = {
  method: type("'GET'"),
  path: type("'/version'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: SystemVersion, 500: ErrorResponse },
};

export type get_SystemPing = typeof get_SystemPing;
export const get_SystemPing = {
  method: type("'GET'"),
  path: type("'/_ping'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: type("unknown"), 500: type("unknown") },
  responseHeaders: { 200: type({ Swarm: type.enumerated("inactive", "pending", "error", "locked", "active/worker", "active/manager"), "Docker-Experimental": type("boolean"), "Cache-Control": "string = \"no-cache, no-store, must-revalidate\"", Pragma: "string = \"no-cache\"", "API-Version": type("string"), "Builder-Version": "string = \"2\"" }), 500: type({ "Cache-Control": "string = \"no-cache, no-store, must-revalidate\"", Pragma: "string = \"no-cache\"" }) },
};

export type head_SystemPingHead = typeof head_SystemPingHead;
export const head_SystemPingHead = {
  method: type("'HEAD'"),
  path: type("'/_ping'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: type("unknown"), 500: type("unknown") },
  responseHeaders: { 200: type({ Swarm: type.enumerated("inactive", "pending", "error", "locked", "active/worker", "active/manager"), "Docker-Experimental": type("boolean"), "Cache-Control": "string = \"no-cache, no-store, must-revalidate\"", Pragma: "string = \"no-cache\"", "API-Version": type("string"), "Builder-Version": type("string") }) },
};

export type post_ImageCommit = typeof post_ImageCommit;
export const post_ImageCommit = {
  method: type("'POST'"),
  path: type("'/commit'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ container: type("string"), repo: type("string"), tag: type("string"), comment: type("string"), author: type("string"), pause: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), changes: type("string") }).partial().optional(), body: ContainerConfig },
  responses: { 201: IdResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemEvents = typeof get_SystemEvents;
export const get_SystemEvents = {
  method: type("'GET'"),
  path: type("'/events'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ since: type("string"), until: type("string"), filters: type("string") }).partial().optional() },
  responses: { 200: EventMessage, 400: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemDataUsage = typeof get_SystemDataUsage;
export const get_SystemDataUsage = {
  method: type("'GET'"),
  path: type("'/system/df'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ type: type.enumerated("container", "image", "volume", "build-cache").array() }).partial().optional() },
  responses: { 200: type({ LayersSize: type("number.integer"), Images: ImageSummary.array(), Containers: ContainerSummary.array(), Volumes: Volume.array(), BuildCache: BuildCache.array() }).partial(), 500: ErrorResponse },
};

export type get_ImageGet = typeof get_ImageGet;
export const get_ImageGet = {
  method: type("'GET'"),
  path: type("'/images/{name}/get'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }) },
  responses: { 200: type("unknown"), 500: type("unknown") },
};

export type get_ImageGetAll = typeof get_ImageGetAll;
export const get_ImageGetAll = {
  method: type("'GET'"),
  path: type("'/images/get'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ names: type("string").array() }).partial().optional() },
  responses: { 200: type("unknown"), 500: type("unknown") },
};

export type post_ImageLoad = typeof post_ImageLoad;
export const post_ImageLoad = {
  method: type("'POST'"),
  path: type("'/images/load'"),
  requestFormat: type("'text'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ quiet: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional() },
  responses: { 200: type("unknown"), 500: ErrorResponse },
};

export type post_ContainerExec = typeof post_ContainerExec;
export const post_ContainerExec = {
  method: type("'POST'"),
  path: type("'/containers/{id}/exec'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }), body: type({ AttachStdin: type("boolean"), AttachStdout: type("boolean"), AttachStderr: type("boolean"), ConsoleSize: type("number.integer >= 0").array().or(type("null")), DetachKeys: type("string"), Tty: type("boolean"), Env: type("string").array(), Cmd: type("string").array(), Privileged: "boolean = false", User: type("string"), WorkingDir: type("string") }).partial().optional() },
  responses: { 201: IdResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ExecStart = typeof post_ExecStart;
export const post_ExecStart = {
  method: type("'POST'"),
  path: type("'/exec/{id}/start'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }), body: type({ Detach: type("boolean"), Tty: type("boolean"), ConsoleSize: type("number.integer >= 0").array().or(type("null")) }).partial().optional() },
  responses: { 200: type("unknown"), 404: type("unknown"), 409: type("unknown") },
};

export type post_ExecResize = typeof post_ExecResize;
export const post_ExecResize = {
  method: type("'POST'"),
  path: type("'/exec/{id}/resize'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ h: type("string.integer.parse"), w: type("string.integer.parse") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: type("unknown"), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ExecInspect = typeof get_ExecInspect;
export const get_ExecInspect = {
  method: type("'GET'"),
  path: type("'/exec/{id}/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 200: type({ CanRemove: type("boolean"), DetachKeys: type("string"), ID: type("string"), Running: type("boolean"), ExitCode: type("number.integer"), ProcessConfig: ProcessConfig, OpenStdin: type("boolean"), OpenStderr: type("boolean"), OpenStdout: type("boolean"), ContainerID: type("string"), Pid: type("number.integer") }).partial(), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_VolumeList = typeof get_VolumeList;
export const get_VolumeList = {
  method: type("'GET'"),
  path: type("'/volumes'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().optional() },
  responses: { 200: VolumeListResponse, 500: ErrorResponse },
};

export type post_VolumeCreate = typeof post_VolumeCreate;
export const post_VolumeCreate = {
  method: type("'POST'"),
  path: type("'/volumes/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: VolumeCreateOptions },
  responses: { 201: Volume, 500: ErrorResponse },
};

export type get_VolumeInspect = typeof get_VolumeInspect;
export const get_VolumeInspect = {
  method: type("'GET'"),
  path: type("'/volumes/{name}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }) },
  responses: { 200: Volume, 404: ErrorResponse, 500: ErrorResponse },
};

export type put_VolumeUpdate = typeof put_VolumeUpdate;
export const put_VolumeUpdate = {
  method: type("'PUT'"),
  path: type("'/volumes/{name}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse") }), path: type({ name: type("string") }), body: type({ Spec: ClusterVolumeSpec }).partial().optional() },
  responses: { 200: type("unknown"), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_VolumeDelete = typeof delete_VolumeDelete;
export const delete_VolumeDelete = {
  method: type("'DELETE'"),
  path: type("'/volumes/{name}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional(), path: type({ name: type("string") }) },
  responses: { 204: type("unknown"), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_VolumePrune = typeof post_VolumePrune;
export const post_VolumePrune = {
  method: type("'POST'"),
  path: type("'/volumes/prune'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().optional() },
  responses: { 200: type({ VolumesDeleted: type("string").array(), SpaceReclaimed: type("number.integer") }).partial(), 500: ErrorResponse },
};

export type get_NetworkList = typeof get_NetworkList;
export const get_NetworkList = {
  method: type("'GET'"),
  path: type("'/networks'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().optional() },
  responses: { 200: Network.array(), 500: ErrorResponse },
};

export type get_NetworkInspect = typeof get_NetworkInspect;
export const get_NetworkInspect = {
  method: type("'GET'"),
  path: type("'/networks/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ verbose: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), scope: type("string") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: Network, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_NetworkDelete = typeof delete_NetworkDelete;
export const delete_NetworkDelete = {
  method: type("'DELETE'"),
  path: type("'/networks/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 204: type("unknown"), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkCreate = typeof post_NetworkCreate;
export const post_NetworkCreate = {
  method: type("'POST'"),
  path: type("'/networks/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: type({ Name: type("string"), "CheckDuplicate?": type("boolean"), Driver: "string = \"bridge\"", "Internal?": type("boolean"), "Attachable?": type("boolean"), "Ingress?": type("boolean"), "IPAM?": IPAM, "EnableIPv6?": type("boolean"), "Options?": type({ "[string]": type("string") }), "Labels?": type({ "[string]": type("string") }) }) },
  responses: { 201: type({ Id: type("string"), Warning: type("string") }).partial(), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkConnect = typeof post_NetworkConnect;
export const post_NetworkConnect = {
  method: type("'POST'"),
  path: type("'/networks/{id}/connect'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }), body: type({ Container: type("string"), EndpointConfig: EndpointSettings }).partial().optional() },
  responses: { 200: type("unknown"), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkDisconnect = typeof post_NetworkDisconnect;
export const post_NetworkDisconnect = {
  method: type("'POST'"),
  path: type("'/networks/{id}/disconnect'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }), body: type({ Container: type("string"), Force: type("boolean") }).partial().optional() },
  responses: { 200: type("unknown"), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkPrune = typeof post_NetworkPrune;
export const post_NetworkPrune = {
  method: type("'POST'"),
  path: type("'/networks/prune'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().optional() },
  responses: { 200: type({ NetworksDeleted: type("string").array() }).partial(), 500: ErrorResponse },
};

export type get_PluginList = typeof get_PluginList;
export const get_PluginList = {
  method: type("'GET'"),
  path: type("'/plugins'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().optional() },
  responses: { 200: Plugin.array(), 500: ErrorResponse },
};

export type get_GetPluginPrivileges = typeof get_GetPluginPrivileges;
export const get_GetPluginPrivileges = {
  method: type("'GET'"),
  path: type("'/plugins/privileges'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ remote: type("string") }) },
  responses: { 200: PluginPrivilege.array(), 500: ErrorResponse },
};

export type post_PluginPull = typeof post_PluginPull;
export const post_PluginPull = {
  method: type("'POST'"),
  path: type("'/plugins/pull'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ remote: type("string"), "name?": type("string") }), header: type({ "X-Registry-Auth": type("string") }).partial().optional(), body: PluginPrivilege.array() },
  responses: { 204: type("unknown"), 500: ErrorResponse },
};

export type get_PluginInspect = typeof get_PluginInspect;
export const get_PluginInspect = {
  method: type("'GET'"),
  path: type("'/plugins/{name}/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }) },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_PluginDelete = typeof delete_PluginDelete;
export const delete_PluginDelete = {
  method: type("'DELETE'"),
  path: type("'/plugins/{name}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional(), path: type({ name: type("string") }) },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginEnable = typeof post_PluginEnable;
export const post_PluginEnable = {
  method: type("'POST'"),
  path: type("'/plugins/{name}/enable'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ timeout: type("string.integer.parse") }).partial().optional(), path: type({ name: type("string") }) },
  responses: { 200: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginDisable = typeof post_PluginDisable;
export const post_PluginDisable = {
  method: type("'POST'"),
  path: type("'/plugins/{name}/disable'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional(), path: type({ name: type("string") }) },
  responses: { 200: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginUpgrade = typeof post_PluginUpgrade;
export const post_PluginUpgrade = {
  method: type("'POST'"),
  path: type("'/plugins/{name}/upgrade'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ remote: type("string") }), path: type({ name: type("string") }), header: type({ "X-Registry-Auth": type("string") }).partial().optional(), body: PluginPrivilege.array() },
  responses: { 204: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginCreate = typeof post_PluginCreate;
export const post_PluginCreate = {
  method: type("'POST'"),
  path: type("'/plugins/create'"),
  requestFormat: type("'text'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ name: type("string") }) },
  responses: { 204: type("unknown"), 500: ErrorResponse },
};

export type post_PluginPush = typeof post_PluginPush;
export const post_PluginPush = {
  method: type("'POST'"),
  path: type("'/plugins/{name}/push'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }) },
  responses: { 200: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginSet = typeof post_PluginSet;
export const post_PluginSet = {
  method: type("'POST'"),
  path: type("'/plugins/{name}/set'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }), body: type("string").array() },
  responses: { 204: type("unknown"), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_NodeList = typeof get_NodeList;
export const get_NodeList = {
  method: type("'GET'"),
  path: type("'/nodes'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().optional() },
  responses: { 200: Node.array(), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_NodeInspect = typeof get_NodeInspect;
export const get_NodeInspect = {
  method: type("'GET'"),
  path: type("'/nodes/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 200: Node, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_NodeDelete = typeof delete_NodeDelete;
export const delete_NodeDelete = {
  method: type("'DELETE'"),
  path: type("'/nodes/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: type("unknown"), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_NodeUpdate = typeof post_NodeUpdate;
export const post_NodeUpdate = {
  method: type("'POST'"),
  path: type("'/nodes/{id}/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse") }), path: type({ id: type("string") }), body: NodeSpec },
  responses: { 200: type("unknown"), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmInspect = typeof get_SwarmInspect;
export const get_SwarmInspect = {
  method: type("'GET'"),
  path: type("'/swarm'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: Swarm, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmInit = typeof post_SwarmInit;
export const post_SwarmInit = {
  method: type("'POST'"),
  path: type("'/swarm/init'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: type({ ListenAddr: type("string"), AdvertiseAddr: type("string"), DataPathAddr: type("string"), DataPathPort: type("number.integer"), DefaultAddrPool: type("string").array(), ForceNewCluster: type("boolean"), SubnetSize: type("number.integer"), Spec: SwarmSpec }).partial().optional() },
  responses: { 200: type("string"), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmJoin = typeof post_SwarmJoin;
export const post_SwarmJoin = {
  method: type("'POST'"),
  path: type("'/swarm/join'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: type({ ListenAddr: type("string"), AdvertiseAddr: type("string"), DataPathAddr: type("string"), RemoteAddrs: type("string").array(), JoinToken: type("string") }).partial().optional() },
  responses: { 200: type("unknown"), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmLeave = typeof post_SwarmLeave;
export const post_SwarmLeave = {
  method: type("'POST'"),
  path: type("'/swarm/leave'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ force: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional() },
  responses: { 200: type("unknown"), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmUpdate = typeof post_SwarmUpdate;
export const post_SwarmUpdate = {
  method: type("'POST'"),
  path: type("'/swarm/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse"), rotateWorkerToken: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), rotateManagerToken: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), rotateManagerUnlockKey: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }), body: SwarmSpec },
  responses: { 200: type("unknown"), 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmUnlockkey = typeof get_SwarmUnlockkey;
export const get_SwarmUnlockkey = {
  method: type("'GET'"),
  path: type("'/swarm/unlockkey'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 200: type({ UnlockKey: type("string") }).partial(), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmUnlock = typeof post_SwarmUnlock;
export const post_SwarmUnlock = {
  method: type("'POST'"),
  path: type("'/swarm/unlock'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: type({ UnlockKey: type("string") }).partial().optional() },
  responses: { 200: type("unknown"), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceList = typeof get_ServiceList;
export const get_ServiceList = {
  method: type("'GET'"),
  path: type("'/services'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string"), status: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional() },
  responses: { 200: Service.array(), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceCreate = typeof post_ServiceCreate;
export const post_ServiceCreate = {
  method: type("'POST'"),
  path: type("'/services/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { header: type({ "X-Registry-Auth": type("string") }).partial().optional(), body: ServiceSpec.and(type({ "[string]": type("unknown") })) },
  responses: { 201: type({ ID: type("string"), Warning: type("string") }).partial(), 400: ErrorResponse, 403: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceInspect = typeof get_ServiceInspect;
export const get_ServiceInspect = {
  method: type("'GET'"),
  path: type("'/services/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ insertDefaults: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1") }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: Service, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ServiceDelete = typeof delete_ServiceDelete;
export const delete_ServiceDelete = {
  method: type("'DELETE'"),
  path: type("'/services/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 200: type("unknown"), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceUpdate = typeof post_ServiceUpdate;
export const post_ServiceUpdate = {
  method: type("'POST'"),
  path: type("'/services/{id}/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse"), registryAuthFrom: type.enumerated("spec", "previous-spec"), "rollback?": type("string") }), path: type({ id: type("string") }), header: type({ "X-Registry-Auth": type("string") }).partial().optional(), body: ServiceSpec.and(type({ "[string]": type("unknown") })) },
  responses: { 200: ServiceUpdateResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceLogs = typeof get_ServiceLogs;
export const get_ServiceLogs = {
  method: type("'GET'"),
  path: type("'/services/{id}/logs'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ details: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), follow: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdout: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stderr: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), since: type("string.integer.parse"), timestamps: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), tail: "string = \"all\"" }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: type("unknown"), 404: type("unknown"), 500: type("unknown"), 503: type("unknown") },
};

export type get_TaskList = typeof get_TaskList;
export const get_TaskList = {
  method: type("'GET'"),
  path: type("'/tasks'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().optional() },
  responses: { 200: Task.array(), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskInspect = typeof get_TaskInspect;
export const get_TaskInspect = {
  method: type("'GET'"),
  path: type("'/tasks/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 200: Task, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskLogs = typeof get_TaskLogs;
export const get_TaskLogs = {
  method: type("'GET'"),
  path: type("'/tasks/{id}/logs'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ details: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), follow: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stdout: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), stderr: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), since: type("string.integer.parse"), timestamps: type("boolean | string | number").pipe((x) => x === true || x === "true" || x === 1 || x === "1"), tail: "string = \"all\"" }).partial().optional(), path: type({ id: type("string") }) },
  responses: { 200: type("unknown"), 404: type("unknown"), 500: type("unknown"), 503: type("unknown") },
};

export type get_SecretList = typeof get_SecretList;
export const get_SecretList = {
  method: type("'GET'"),
  path: type("'/secrets'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().optional() },
  responses: { 200: Secret.array(), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretCreate = typeof post_SecretCreate;
export const post_SecretCreate = {
  method: type("'POST'"),
  path: type("'/secrets/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: SecretSpec.and(type({ "[string]": type("unknown") })) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SecretInspect = typeof get_SecretInspect;
export const get_SecretInspect = {
  method: type("'GET'"),
  path: type("'/secrets/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 200: Secret, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_SecretDelete = typeof delete_SecretDelete;
export const delete_SecretDelete = {
  method: type("'DELETE'"),
  path: type("'/secrets/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 204: type("unknown"), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretUpdate = typeof post_SecretUpdate;
export const post_SecretUpdate = {
  method: type("'POST'"),
  path: type("'/secrets/{id}/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse") }), path: type({ id: type("string") }), body: SecretSpec },
  responses: { 200: type("unknown"), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigList = typeof get_ConfigList;
export const get_ConfigList = {
  method: type("'GET'"),
  path: type("'/configs'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ filters: type("string") }).partial().optional() },
  responses: { 200: Config.array(), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigCreate = typeof post_ConfigCreate;
export const post_ConfigCreate = {
  method: type("'POST'"),
  path: type("'/configs/create'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { body: ConfigSpec.and(type({ "[string]": type("unknown") })) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigInspect = typeof get_ConfigInspect;
export const get_ConfigInspect = {
  method: type("'GET'"),
  path: type("'/configs/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 200: Config, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ConfigDelete = typeof delete_ConfigDelete;
export const delete_ConfigDelete = {
  method: type("'DELETE'"),
  path: type("'/configs/{id}'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ id: type("string") }) },
  responses: { 204: type("unknown"), 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigUpdate = typeof post_ConfigUpdate;
export const post_ConfigUpdate = {
  method: type("'POST'"),
  path: type("'/configs/{id}/update'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { query: type({ version: type("string.integer.parse") }), path: type({ id: type("string") }), body: ConfigSpec },
  responses: { 200: type("unknown"), 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_DistributionInspect = typeof get_DistributionInspect;
export const get_DistributionInspect = {
  method: type("'GET'"),
  path: type("'/distribution/{name}/json'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: { path: type({ name: type("string") }) },
  responses: { 200: DistributionInspect, 401: ErrorResponse, 500: ErrorResponse },
};

export type post_Session = typeof post_Session;
export const post_Session = {
  method: type("'POST'"),
  path: type("'/session'"),
  requestFormat: type("'json'"),
  responseFormat: type("'json'"),
  parameters: type("never"),
  responses: { 101: type("unknown"), 400: type("unknown"), 500: type("unknown") },
};

// </Endpoints>

  
     // <EndpointByMethod>
     export const EndpointByMethod = {
     get: {
           "/containers/json": get_ContainerList,
"/containers/{id}/json": get_ContainerInspect,
"/containers/{id}/top": get_ContainerTop,
"/containers/{id}/logs": get_ContainerLogs,
"/containers/{id}/changes": get_ContainerChanges,
"/containers/{id}/export": get_ContainerExport,
"/containers/{id}/stats": get_ContainerStats,
"/containers/{id}/attach/ws": get_ContainerAttachWebsocket,
"/containers/{id}/archive": get_ContainerArchive,
"/images/json": get_ImageList,
"/images/{name}/json": get_ImageInspect,
"/images/{name}/history": get_ImageHistory,
"/images/search": get_ImageSearch,
"/info": get_SystemInfo,
"/version": get_SystemVersion,
"/_ping": get_SystemPing,
"/events": get_SystemEvents,
"/system/df": get_SystemDataUsage,
"/images/{name}/get": get_ImageGet,
"/images/get": get_ImageGetAll,
"/exec/{id}/json": get_ExecInspect,
"/volumes": get_VolumeList,
"/volumes/{name}": get_VolumeInspect,
"/networks": get_NetworkList,
"/networks/{id}": get_NetworkInspect,
"/plugins": get_PluginList,
"/plugins/privileges": get_GetPluginPrivileges,
"/plugins/{name}/json": get_PluginInspect,
"/nodes": get_NodeList,
"/nodes/{id}": get_NodeInspect,
"/swarm": get_SwarmInspect,
"/swarm/unlockkey": get_SwarmUnlockkey,
"/services": get_ServiceList,
"/services/{id}": get_ServiceInspect,
"/services/{id}/logs": get_ServiceLogs,
"/tasks": get_TaskList,
"/tasks/{id}": get_TaskInspect,
"/tasks/{id}/logs": get_TaskLogs,
"/secrets": get_SecretList,
"/secrets/{id}": get_SecretInspect,
"/configs": get_ConfigList,
"/configs/{id}": get_ConfigInspect,
"/distribution/{name}/json": get_DistributionInspect
         },
post: {
           "/containers/create": post_ContainerCreate,
"/containers/{id}/resize": post_ContainerResize,
"/containers/{id}/start": post_ContainerStart,
"/containers/{id}/stop": post_ContainerStop,
"/containers/{id}/restart": post_ContainerRestart,
"/containers/{id}/kill": post_ContainerKill,
"/containers/{id}/update": post_ContainerUpdate,
"/containers/{id}/rename": post_ContainerRename,
"/containers/{id}/pause": post_ContainerPause,
"/containers/{id}/unpause": post_ContainerUnpause,
"/containers/{id}/attach": post_ContainerAttach,
"/containers/{id}/wait": post_ContainerWait,
"/containers/prune": post_ContainerPrune,
"/build": post_ImageBuild,
"/build/prune": post_BuildPrune,
"/images/create": post_ImageCreate,
"/images/{name}/push": post_ImagePush,
"/images/{name}/tag": post_ImageTag,
"/images/prune": post_ImagePrune,
"/auth": post_SystemAuth,
"/commit": post_ImageCommit,
"/images/load": post_ImageLoad,
"/containers/{id}/exec": post_ContainerExec,
"/exec/{id}/start": post_ExecStart,
"/exec/{id}/resize": post_ExecResize,
"/volumes/create": post_VolumeCreate,
"/volumes/prune": post_VolumePrune,
"/networks/create": post_NetworkCreate,
"/networks/{id}/connect": post_NetworkConnect,
"/networks/{id}/disconnect": post_NetworkDisconnect,
"/networks/prune": post_NetworkPrune,
"/plugins/pull": post_PluginPull,
"/plugins/{name}/enable": post_PluginEnable,
"/plugins/{name}/disable": post_PluginDisable,
"/plugins/{name}/upgrade": post_PluginUpgrade,
"/plugins/create": post_PluginCreate,
"/plugins/{name}/push": post_PluginPush,
"/plugins/{name}/set": post_PluginSet,
"/nodes/{id}/update": post_NodeUpdate,
"/swarm/init": post_SwarmInit,
"/swarm/join": post_SwarmJoin,
"/swarm/leave": post_SwarmLeave,
"/swarm/update": post_SwarmUpdate,
"/swarm/unlock": post_SwarmUnlock,
"/services/create": post_ServiceCreate,
"/services/{id}/update": post_ServiceUpdate,
"/secrets/create": post_SecretCreate,
"/secrets/{id}/update": post_SecretUpdate,
"/configs/create": post_ConfigCreate,
"/configs/{id}/update": post_ConfigUpdate,
"/session": post_Session
         },
delete: {
           "/containers/{id}": delete_ContainerDelete,
"/images/{name}": delete_ImageDelete,
"/volumes/{name}": delete_VolumeDelete,
"/networks/{id}": delete_NetworkDelete,
"/plugins/{name}": delete_PluginDelete,
"/nodes/{id}": delete_NodeDelete,
"/services/{id}": delete_ServiceDelete,
"/secrets/{id}": delete_SecretDelete,
"/configs/{id}": delete_ConfigDelete
         },
put: {
           "/containers/{id}/archive": put_PutContainerArchive,
"/volumes/{name}": put_VolumeUpdate
         },
head: {
           "/containers/{id}/archive": head_ContainerArchiveInfo,
"/_ping": head_SystemPingHead
         }
     }
     export type EndpointByMethod = typeof EndpointByMethod;
     // </EndpointByMethod>
     

    // <EndpointByMethod.Shorthands>
    export type GetEndpoints = EndpointByMethod["get"]
export type PostEndpoints = EndpointByMethod["post"]
export type DeleteEndpoints = EndpointByMethod["delete"]
export type PutEndpoints = EndpointByMethod["put"]
export type HeadEndpoints = EndpointByMethod["head"]
    // </EndpointByMethod.Shorthands>
    
  
// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: unknown;
  header?: unknown;
  path?: unknown;
  cookie?: unknown;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type ResponseFormat = "json" | "sse";


    // <EndpointRequestFormats>
    /** Non-json request body encodings; missing entries default to `"json"`. */
    export const endpointRequestFormats = {
    post: {
          "/build": "binary",
"/images/create": "text",
"/images/load": "text",
"/plugins/create": "text"
        },
put: {
          "/containers/{id}/archive": "binary"
        }
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: RequestFormat }> }>;
    // </EndpointRequestFormats>
    

    // <EndpointResponseFormats>
    /** Non-json response body modes; missing entries default to `"json"`. SSE skips JSON parse + output validation. */
    export const endpointResponseFormats = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: ResponseFormat }> }>;
    // </EndpointResponseFormats>
    

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  responses?: Record<string, unknown>;
  responseHeaders?: Record<string, unknown>;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  responseFormat: ResponseFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"]
};

/**
 * Minimal response surface used by ApiClient — avoids depending on the DOM `Response`
 * global (helpful for Node without DOM lib). Structural typing accepts fetch Response.
 */
export interface FetcherResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: {
    get(name: string): string | null;
    getSetCookie?: () => string[];
  };
  /** Present on fetch Response; used for SSE / streaming bodies. */
  body?: ReadableStream<Uint8Array> | null;
  json(): Promise<unknown>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  clone(): FetcherResponse;
}

export interface Fetcher {
    decodePathParams?: (path: string, pathParams: unknown) => string
  encodeSearchParams?: (searchParams: unknown) => URLSearchParams | undefined
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: unknown, headers: Headers) => void
    //
    fetch: (input: {
      method: Method;
      url: URL;
      urlSearchParams?: URLSearchParams | undefined;
      parameters?: EndpointParameters | undefined;
      path: string;
      /** How to encode `parameters.body` (from OpenAPI requestBody content type). */
      requestFormat: RequestFormat;
      overrides?: RequestInit;
      throwOnStatusError?: boolean
    }) => Promise<FetcherResponse>;
    parseResponseData?: (response: FetcherResponse) => Promise<unknown>
}

export const successStatusCodes = [200,201,202,203,204,205,206,207,208,226,300,301,302,303,304,305,306,307,308] as const;
export type SuccessStatusCode = typeof successStatusCodes[number];

export const errorStatusCodes = [400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,421,422,423,424,425,426,428,429,431,451,500,501,502,503,504,505,506,507,508,510,511] as const;
export type ErrorStatusCode = typeof errorStatusCodes[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown> extends Omit<Headers, 'append' | 'delete' | 'get' | 'getSetCookie' | 'has' | 'set' | 'forEach'> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[]
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => boolean
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  forEach: (callbackfn: (value: TypedHeaderValues[keyof TypedHeaderValues] | string & {}, key: Extract<keyof TypedHeaderValues, string> | string & {}, parent: TypedHeaders<TypedHeaderValues>) => void, thisArg?: any) => void
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
    [K in keyof TAllResponses]: K extends string
      ? K extends `${infer TStatusCode extends number}`
        ? TStatusCode extends SuccessStatusCode
          ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
          : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
        : never
      : K extends number
        ? K extends SuccessStatusCode
          ? TypedSuccessResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
          : TypedErrorResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
        : never;
  }[keyof TAllResponses];

type InferSchemaValue<T> = T extends { infer: infer O } ? O : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInput<T> = T extends { inferIn: infer I } ? I : T extends object ? { [K in keyof T as undefined extends InferSchemaInput<T[K]> ? never : K]: InferSchemaInput<T[K]> } & { [K in keyof T as undefined extends InferSchemaInput<T[K]> ? K : never]?: Exclude<InferSchemaInput<T[K]>, undefined> } : T;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<InferSchemaValue<TResponses>, TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, { status: TStatusCode }>

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

export type ValidateSide = "none" | "input" | "output" | "both";
export type OnValidate = (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
}) => unknown | Promise<unknown>;

// </ApiClientTypes>

// <TypedStatusError>
export class TypedStatusError<TData = unknown> extends Error {
  response: TypedErrorResponse<TData, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = 'TypedStatusError';
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>


// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return (() => { const out = (schema as (data: unknown) => unknown)(value); if (out instanceof type.errors) throw out; return out; })();
};

const runValidate = async (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
  onValidate?: OnValidate;
}): Promise<unknown> => {
  if (ctx.onValidate) return ctx.onValidate(ctx);
  return defaultParse(ctx.schema, ctx.value);
};
// </ValidateHelpers>


// <ApiClient>
export class ApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "both";
  onValidate?: OnValidate;

  constructor(
    public fetcher: Fetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate },
  ) {
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  setValidate(validate: ValidateSide) {
    this.validate = validate;
    return this;
  }

  setOnValidate(onValidate: OnValidate | undefined) {
    if (onValidate === undefined) {
      delete this.onValidate;
    } else {
      this.onValidate = onValidate;
    }
    return this;
  }

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: unknown): string => {
    const record = (params ?? {}) as Record<string, unknown>;
    return url
      .replace(/{(\w+)}/g, (_, key: string) => (record[key] != null ? String(record[key]) : `{${key}}`))
      .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => (record[key] != null ? String(record[key]) : `:${key}`));
  }

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (queryParams: unknown): URLSearchParams | undefined => {
    if (!queryParams || typeof queryParams !== "object") return;

    const searchParams = new URLSearchParams();
    Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
      if (value != null) {
        // Skip null/undefined values
        if (Array.isArray(value)) {
          value.forEach((val) => val != null && searchParams.append(key, String(val)));
        } else {
          searchParams.append(key, String(value));
        }
      }
    });

    return searchParams;
  }

  /** Append cookie params as a Cookie header (or merge into existing). */
  defaultEncodeCookies = (cookies: unknown, headers: Headers): void => {
    if (!cookies || typeof cookies !== "object") return;
    const parts = Object.entries(cookies as Record<string, unknown>)
      .filter(([, value]) => value != null)
      .map(([key, value]) => `${key}=${String(value)}`);
    if (!parts.length) return;
    const existing = headers.get("cookie");
    headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
  }

  defaultParseResponseData = async (response: FetcherResponse): Promise<unknown> => {
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("text/event-stream")) {
      return response.body ?? null;
    }
    if (contentType.startsWith("text/")) {
      return (await response.text())
    }

    if (contentType === "application/octet-stream") {
      return (await response.arrayBuffer())
    }

    if (
      contentType.includes("application/json") ||
      (contentType.includes("application/") && contentType.includes("json")) ||
      contentType === "*/*"
      ) {
      try {
        return await response.json();
      } catch {
        return undefined
      }
    }

    return
  }

  // <ApiClient.get>
    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

    get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    get<Path extends keyof GetEndpoints, _TEndpoint extends GetEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("get", path, ...params);
    }
    // </ApiClient.get>
    
// <ApiClient.post>
    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

    post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    post<Path extends keyof PostEndpoints, _TEndpoint extends PostEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("post", path, ...params);
    }
    // </ApiClient.post>
    
// <ApiClient.delete>
    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

    delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    delete<Path extends keyof DeleteEndpoints, _TEndpoint extends DeleteEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("delete", path, ...params);
    }
    // </ApiClient.delete>
    
// <ApiClient.put>
    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

    put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    put<Path extends keyof PutEndpoints, _TEndpoint extends PutEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("put", path, ...params);
    }
    // </ApiClient.put>
    
// <ApiClient.head>
    head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>;

    head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    head<Path extends keyof HeadEndpoints, _TEndpoint extends HeadEndpoints[Path]>(
      path: Path,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
        return this.request("head", path, ...params);
    }
    // </ApiClient.head>
    

    // <ApiClient.request>
    /**
     * Generic request method with full type-safety for any endpoint
     */
    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: false; throwOnStatusError?: boolean })
      >
    ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]>

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<
        (TEndpoint extends { parameters: infer UParams }
          ? NotNever<UParams> extends true ? InferSchemaInput<UParams> & { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean } : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean }
          : { overrides?: RequestInit; withResponse?: true; throwOnStatusError?: boolean })
      >
    ): Promise<SafeApiResponse<TEndpoint>>;

    request<
      TMethod extends keyof EndpointByMethod,
      TPath extends keyof EndpointByMethod[TMethod],
      TEndpoint extends EndpointByMethod[TMethod][TPath]
    >(
      method: TMethod,
      path: TPath,
      ...params: MaybeOptionalArg<any>
    ): Promise<any> {
      return (async () => {
      const requestParams = params[0];
      const withResponse = requestParams?.withResponse;
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
      let overrides = requestParams?.overrides;
      const validateSide: ValidateSide = requestParams?.validate ?? this.validate;

      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      type RuntimeEndpoint = {
        parameters?: Partial<Record<"body" | "query" | "header" | "path" | "cookie", unknown>>;
        responses?: Record<string, unknown>;
      };
      const endpointSchema = EndpointByMethod[method][path] as RuntimeEndpoint;
      const shouldValidateInput = validateSide === "input" || validateSide === "both";
      if (shouldValidateInput && endpointSchema.parameters) {
        const paramSchema = endpointSchema.parameters;
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = paramSchema[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {
            parametersToSend[key] = await runValidate({
              side: "input",
              method: String(method),
              path: String(path),
              schema,
              value,
              ...(this.onValidate ? { onValidate: this.onValidate } : {}),
            });
          }
        }
      }

      const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(this.baseUrl + (path as string), parametersToSend.path ?? {});
      const url = new URL(resolvedPath);
      const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(parametersToSend.query);

      if (parametersToSend.cookie) {
        const headers = new Headers((overrides as RequestInit | undefined)?.headers);
        (this.fetcher.encodeCookies ?? this.defaultEncodeCookies)(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const response = await this.fetcher.fetch({
        method: method,
        path: (path as string),
        url,
        ...(urlSearchParams ? { urlSearchParams } : {}),
        ...(Object.keys(parametersToSend).length ? { parameters: parametersToSend } : {}),
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        ...(overrides ? { overrides } : {}),
        throwOnStatusError
      });
          const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
          let data =
            responseFormat === "sse"
              ? (response.body ?? null)
              : await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response);
          const shouldValidateOutput = validateSide === "output" || validateSide === "both";
          if (shouldValidateOutput && responseFormat !== "sse" && response.ok && endpointSchema?.responses) {
            const responseSchema = endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
            if (responseSchema) {
              data = await runValidate({
                side: "output",
                method: String(method),
                path: String(path),
                schema: responseSchema,
                value: data,
                ...(this.onValidate ? { onValidate: this.onValidate } : {}),
              });
            }
          }
          const typedResponse = Object.assign(response, {
            data: data,
            json: () => Promise.resolve(data)
          }) as SafeApiResponse<TEndpoint>;

          if (throwOnStatusError && (errorStatusCodes as readonly number[]).includes(response.status)) {
            throw new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>);
          }

          return withResponse ? typedResponse : data;
      })() as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"]
    }
    // </ApiClient.request>
}

export function createApiClient(
  fetcher: Fetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate },
) {
  return new ApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}


/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));

 // With error handling
 const result = await api.get("/users/{id}", { path: { id: "123" }, withResponse: true });
 if (result.ok) {
   // Access data directly
   const user = result.data;
   console.log(user);

   // Or use the json() method for compatibility
   const userFromJson = await result.json();
   console.log(userFromJson);
 } else {
   const error = result.data;
   console.error(`Error ${result.status}:`, error);
 }
*/

// </ApiClient>

  